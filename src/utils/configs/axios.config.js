import axios from 'axios';
axios.defaults.baseURL = 'https://example.url/v1/';

export const axiosConfig = axios.create();

axiosConfig.interceptors.request.use(
  function (config) {
    // deleting  value if it equal to ''
    for (const key in config.params) {
      if (Object.hasOwnProperty.call(config.params, key)) {
        if (config.params[key] === '') {
          delete config.params[key];
        }
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
