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
      'X-RapidAPI-Key': '30c43fa2b1msh3b3024c6c1883e5p12c7d9jsn98cb5bc5c699',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  })
}