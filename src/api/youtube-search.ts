import { api } from '../core/api';

const MAX_RESULTS = '50';
const PART = 'snippet';
const TYPE = 'channel,video';

const getSearchContents = async (request: string) => {
  const params = {
    q: request,
    maxResults: MAX_RESULTS,
    part: PART,
    type: TYPE
  }
  try {
    const response = await api.get('search/', {
      params
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getSearchContents;