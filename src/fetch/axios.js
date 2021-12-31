import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_API;
const serve = axios.create({ baseURL, timeout: 20000 });

serve.interceptors.request.use(config => {
  // config.headers.toKen = store.state.__accessToken__;
  return config;
}, err => Promise.reject(err));

serve.interceptors.response.use(response => {
  const data = typeof (response.data || {}) === 'object' ? response.data : {};

  return data;
}, err => {
  return Promise.reject(err);
});

export default serve;
