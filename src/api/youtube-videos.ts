import axios from 'axios';

export default () => {
  return axios.request({
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/related-contents/',
    params: {id: 'kJQP7kiw5Fk', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '8809e0b87bmshc0acc64344a021ap16e46ejsn06d7e939451d',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  
    }
  }) 
}