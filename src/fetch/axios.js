import axios from "axios";
import store from '@/store';
import { load } from '@/element';

const baseURL = process.env.VUE_APP_BASE_API;
const serve = axios.create({ baseURL, timeout: 20000 });

serve.interceptors.request.use(config => {
  // config.headers.toKen = store.state.__accessToken__;
  return config;
}, err => Promise.reject(err));

serve.interceptors.response.use(response => {
  console.log('response', response);
  load && load.close();
  return response && response.data;
}, err => {
  console.log('response err', err);
  load && load.close();

  return Promise.reject(err);
});

export default serve;
