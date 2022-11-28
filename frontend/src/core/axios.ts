import axios from 'axios';

axios.interceptors.request.use((config: any) => {
  config.headers['token'] = window.localStorage.getItem('token');
  return config;
});

export { axios };