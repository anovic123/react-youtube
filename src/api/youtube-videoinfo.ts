import axios from "axios"

export default (videoId: string | undefined) => {
  return axios.request({
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/video/details/',
    params: { id: videoId },
    headers: {
      'X-RapidAPI-Key': '30c43fa2b1msh3b3024c6c1883e5p12c7d9jsn98cb5bc5c699',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  })
}