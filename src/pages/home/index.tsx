import { FC, useEffect } from 'react';
import { v1 } from 'uuid';

import { HomeVideo, Loader } from '../../components';

import { useFetch } from '../../hooks/useFetch';

import { ContentVideo } from '../../common/types/video/Video';

import s from './style.module.scss';

export const HomePage: FC = () => {
  const { data, error, loading } = useFetch(`video/related-contents/?id=kJQP7kiw5Fk&hl=en&gl=US`);

  useEffect(() => {
    document.title = 'YouTube - Main Page';

    return () => {
      document.title = 'YouTube';
    };
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        {error && <div>{error}</div>}
        {loading ? <Loader /> : data?.contents?.map((v: ContentVideo) => <HomeVideo key={v1()} video={v} />)}
      </div>
    </>
  );
};
