import axios from './axios';
import api from './api';

export default {
  post: data => axios.post('/action/jsoncdt', data),
  get: params => axios.post('/action/jsoncdt', { params })
}