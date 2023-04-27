import axios from "axios";
import { config } from '../core/config';

const baseURL = 'https://youtube138.p.rapidapi.com/'

export const api = axios.create({
  baseURL,
  headers: {
    'x-rapidapi-host': config.apiHost,
    'x-rapidapi-key': config.apiKey,
  }
});

export const fetchDataFromApi = async (url: string, params?: any) => {
  try {
    const { data } = await api.get(baseURL + url, {
      params
    })
    return data;
  } catch (err) {
    console.log(err);
    return err
  }
}