import { FC } from 'react';
import { v1 } from 'uuid';

import { RecVideoItem } from '../rec-video-item';

import { useFetch } from '../../hooks/useFetch';

import { RelatedContentType } from '../../common/types/home';

interface RelatedContentProps {
  id: string;
}

export const RelatedContent: FC<RelatedContentProps> = ({ id }) => {

  const { data } = useFetch(`video/related-contents/?id=${id}&hl=en&gl=US`)
  
  return (
    <>
      {
        data?.contents?.map((el: RelatedContentType) => (
          <RecVideoItem key={v1()} video={el.video} />
        ))
      }
    </>
  )
};
