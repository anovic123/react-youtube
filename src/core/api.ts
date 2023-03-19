import axios from "axios";
import { config } from './config';

export const api = axios.create({
  baseURL: 'https://youtube138.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': config.apiHost,
    'x-rapidapi-key': config.apiKey,
  }
});