import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v1 } from 'uuid';
import { useTranslation } from 'react-i18next';

import { VideoCard, Loader } from '../../components';

import youtubeSearch from '../../api/youtube-search';

interface Video {
  id: string;
  title: string;
  type: string;
  description: string;
  thumbnail: string;
}

interface ApiResponse {
  contents: Video[];
}

export const SearchFeed = () => {
  const [result, setResult] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { searchTerm } = useParams();

  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${result} = YouTube`;

    if (!searchTerm) {
      return;
    }

    const fetchData = async () => {
      const response: ApiResponse = await youtubeSearch(searchTerm);
      setIsLoading(false);
      setResult(response.contents);
    };

    setIsLoading(true);
    fetchData();

    return () => {
      document.title = 'YouTube';
    };
  }, [searchTerm]);

  const videos = result.filter((r: Video) => r.type === 'video');

  return (
    <>
      <h3 style={{ marginBottom: 20, color: 'red' }}>
        {t('search.search1')} <span>{searchTerm}</span>
      </h3>
      {isLoading ? (
        <Loader />
      ) : (
        videos.map((v: any) => (
          <div>
            <VideoCard key={v1()} data={v} />
          </div>
        ))
      )}
    </>
  );
};
