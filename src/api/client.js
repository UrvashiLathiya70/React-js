// "use client";
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

import { BASE_URL } from '../utils/constant';

export const METHODS = {
  GET: 'get',
  DELETE: 'delete',
  HEAD: 'head',
  OPTIONS: 'options',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
};
const axiosConfig = {
  baseURL: BASE_URL,
};
function createAxiosInstance() {
  return axios.create(axiosConfig);
}
const request = createAxiosInstance();
const cache = {};

const client = ({
  method = METHODS.POST,
  url = BASE_URL,
  data,
  useCache = false,
  invalidateQuery = false,
  ...rest
}) =>
  useCache && !invalidateQuery && cache[url]
    ? Promise.resolve(cache[url])
    : request({
        method,
        url,
        data,
        //   paramsSerializer,
        ...rest,
      });

export const clientWithHeaders = ({
  method = METHODS.POST,
  url = BASE_URL,
  data,
  useCache = false,
  invalidateQuery = false,
  ...rest
}) =>
  request({
    method,
    url,
    data,
    // paramsSerializer,
    ...rest,
  }).then((res) => res);

request.interceptors.response.use(
  (res) => res,
  (err) => {
    const originalRequest = err.config;
    const status = err.response?.status;
    if (status === 503) {
      const error = {
        originalRequest,
        status,
        message: 'This service is unavailable right now, please try again later',
      };
      throw error;
    }
    if (status === 500) {
      const error = {
        originalRequest,
        status,
        message: 'An unexpected error occurred, please try again later',
      };
      throw error;
    }
    if (status === 409) {
      const error = {
        originalRequest,
        status,
        message: 'An unexpected error occurred, please try again later',
        result: err,
      };
      throw error;
    }
    if (status === 404) {
      const error = {
        originalRequest,
        status,
        message: 'The requested content does not exist, please try again later',
        result: err,
      };
      throw error;
    }
    if (status === 400) {
      const error = {
        originalRequest,
        status,
        message: 'An unexpected error occurred, please try again later',
        result: err,
      };
      throw error;
    }

    const response = err.response?.data;
    const message = response ? response : err.message;

    const error = { originalRequest, message, status };
    throw error;
  }
);

if (window.localStorage.getItem('persist:root')) {
  const userLocal = JSON.parse(window.localStorage.getItem('persist:root')).auth;
  if (userLocal) {
    const userData = JSON.parse(userLocal).user;
    request.defaults.headers.Authorization = `Bearer ${userData?.result?.token}`;
  }
}
export function setHeaderToken(token) {
  if (token) request.defaults.headers.Authorization = `Bearer ${token}`;
  else delete request.defaults.headers.Authorization;
}

export default client;
