import { api } from '../core/api';

const getVideoInfo = async (videoId: string) => {
  const params = {
    id: videoId,
  }
  try {
    const response = await api.get(`video/details/`, {
      params
    });
    return response
  } catch (error) {
    console.error(error)
  }
}

export default getVideoInfo;