import axios from 'axios';

export default (relatedVideoId: string | undefined) => {
  return axios.request({
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/related-contents/',
    params: { id: relatedVideoId },
    headers: {
      'X-RapidAPI-Key': '7358ea2a2cmsh5338136f111f324p131f95jsn17da87148d66',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  })
}