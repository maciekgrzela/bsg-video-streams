import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { authEndpoints } from './endpoints/auth/authEndpoints';
import { mediaListEndpoints } from './endpoints/medialist/mediaListEndpoints';
import { mediaPlayInfoEndpoints } from './endpoints/mediaplayinfo/mediaPlayInfoEndpoints';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('jwt');
    if (token) config.headers!.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleResponse = (response: AxiosResponse) => {
  return response.data as any;
};

export const requests = {
  get: (url: string, params?: {}) =>
    axios.get(url, { params }).then(handleResponse),
  post: (url: string, body: {}, config?: AxiosRequestConfig | undefined) =>
    axios.post(url, body, config).then(handleResponse),
  patch: (url: string, body: {}, config?: AxiosRequestConfig | undefined) =>
    axios.patch(url, body, config).then(handleResponse),
  put: (url: string, body: {}, config?: AxiosRequestConfig | undefined) =>
    axios.put(url, body, config).then(handleResponse),
  delete: (url: string, config?: AxiosRequestConfig | undefined) =>
    axios.delete(url, config).then(handleResponse),
};

export const endpoints = {
  auth: authEndpoints,
  mediaList: mediaListEndpoints,
  mediaPlayInfo: mediaPlayInfoEndpoints,
};
