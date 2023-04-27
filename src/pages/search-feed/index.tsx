import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { v1 } from 'uuid';

import { VideoCard, Loader } from '../../components';

import { ContentVideo, Video } from '../../common/types/video/Video';

import { useFetch } from '../../hooks/useFetch';

export const SearchFeed: FC = () => {

  const { searchTerm } = useParams();

  const { t } = useTranslation();

  const { data, error, loading } = useFetch(`search/?q=${searchTerm}&hl=en&gl=US&type=video`);

  useEffect(() => {
    document.title = `${searchTerm} - YouTube`;

    return () => {
      document.title = 'YouTube';
    };
  }, []);

  const videos = data?.contents?.filter((v: Video) => v.type === 'video');

  return (
    <>
      <h3 style={{ marginBottom: 20, color: 'red' }}>
        {t('search.search1')} <span>{searchTerm}</span>
      </h3>
      {error && <div>{error}</div>}
      {loading ? <Loader /> : videos?.map((v: ContentVideo) => <VideoCard key={v1()} data={v} />)}
    </>
  );
};
