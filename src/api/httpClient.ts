import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { history } from '..';
import { GenericResponse } from '../types/genericResponse';
import { authEndpoints } from './endpoints/auth/authEndpoints';
import { mediaListEndpoints } from './endpoints/medialist/mediaListEndpoints';
import { mediaPlayInfoEndpoints } from './endpoints/mediaplayinfo/mediaPlayInfoEndpoints';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('jwt');
    if (token) config.headers!.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleErrorResponse = (error: AxiosError) => {
  const { status } = error.response || {};

  switch (status) {
    case 404:
      history.push('/404');
      break;
    case 500:
      history.push('/500');
      break;
    default:
      break;
  }

  return Promise.reject(error);
};

axios.interceptors.response.use(undefined, handleErrorResponse);

const handleResponse = (response: AxiosResponse) => {
  const responseObject: GenericResponse<any> = {
    data: response.data,
    status: response.status,
  };

  return responseObject;
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
