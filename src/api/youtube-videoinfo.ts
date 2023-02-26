import axios from "axios"

export default (videoId: string | undefined) => {
  return axios.request({
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/video/details/',
    params: { id: videoId },
    headers: {
      'X-RapidAPI-Key': '7358ea2a2cmsh5338136f111f324p131f95jsn17da87148d66',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  })
}