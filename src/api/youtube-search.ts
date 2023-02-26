import axios from 'axios';

export default (request: string, nextPageToken: string = '' ) => {
  return axios.request({
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/search/',
    params: { 
      q: request, 
      pageToken: nextPageToken ,
      maxResults: '50',
      part: 'snippet',
      type: 'channel,video'
    },
    headers: {
      'X-RapidAPI-Key': '7358ea2a2cmsh5338136f111f324p131f95jsn17da87148d66',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  })
}