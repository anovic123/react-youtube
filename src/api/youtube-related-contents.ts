import { api } from '../core/api';

const getRelatedContents = async (relatedVideoId: string) => {
  try {
    const response = await api.get(`related-contents/${relatedVideoId}`)
    
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getRelatedContents;
