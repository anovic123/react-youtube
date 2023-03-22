import { RelatedContents } from '../common/types/home';
import { api } from '../core/api';

const getRelatedContents = async (relatedVideoId: string) => {
  const params = {
    id: relatedVideoId,
  }
  try {
    const response = await api.get<RelatedContents>(`video/related-contents/`, {
      params
    })

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getRelatedContents;
