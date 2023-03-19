import { api } from '../core/api';

const getVideos = async () => {
  const params = {
    id: 'kJQP7kiw5Fk',
    hl: 'en',
    gl: 'US'
  };
  try {
    const response = await api.get('video/related-contents/', {
      params
    })
    return response.data;
  } catch (error) {
    console.error(error)
  }
}

export default getVideos;