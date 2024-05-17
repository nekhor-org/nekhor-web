import axios from 'axios';

export const APP_URL =
  process.env.APP_BASE_URL ?? 'https://nekhor-web-v1-production.up.railway.app';
export const BASE_URL =
  process.env.API_BASE_URL ?? 'https://nekhor.camisetaredutoralpostural.com.br';

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

export default http;
