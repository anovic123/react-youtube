import axios from "axios"

export default (videoId: string | undefined) => {
  return axios.request({
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/video',
    params: { id: videoId },
    headers: {
      'X-RapidAPI-Key': '8809e0b87bmshc0acc64344a021ap16e46ejsn06d7e939451d',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  })
}