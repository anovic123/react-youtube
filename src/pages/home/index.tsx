import { FC, useEffect, useState } from 'react';
import { v1 } from 'uuid';

import { HomeVideo, Loader } from '../../components';

import { useFetch } from '../../hooks/useFetch';

import { ContentVideo } from '../../common/types/video/Video';

import s from './style.module.scss';

export const HomePage: FC = () => {
  const [cursorToken, setCursorToken] = useState('');

  const { data, error, loading } = useFetch(
    `video/related-contents/?id=kJQP7kiw5Fk&hl=en&gl=US${
      cursorToken ? `&cursorNext=${cursorToken}` : ''
    }`,
  );

  const [contents, setContents] = useState<ContentVideo[]>([]);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollHeight - scrollTop === clientHeight) {
      if (!data?.cursorNext || data?.cursorNext === cursorToken) {
        return;
      }

      setCursorToken(data?.cursorNext);
    }
  };

  useEffect(() => {
    document.title = 'YouTube - Main Page';

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.title = 'YouTube';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data, cursorToken]);

  useEffect(() => {
    if (data?.contents) {
      setContents((prevContents) => [...prevContents, ...data.contents]);
    }
  }, [data]);

  return (
    <>
      <div className={s.wrapper}>
        {error && <div>{error}</div>}
        {loading ? (
          <Loader />
        ) : (
          contents.map((v: ContentVideo) => <HomeVideo key={v1()} video={v} />)
        )}
      </div>
    </>
  );
};
