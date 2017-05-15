/**
 * 数据服务包装
 */

import axios from 'axios';
import { buildUnixTime } from '@/utils/formateDate';
import { baseURL } from '@/config';
import mock from './mock';

// const axios = axios.create({
//   // baseURL: 'http://162.243.154.46:8000',
// });

if (process.env.NODE_ENV === 'development') {
  mock();
}

export const storeService = {
  match: (params) => {
    return axios.post('/match_storehouse', { params: params })
  },
  listAll: () => {
    return axios.get('/list_storerecords')
  },
  getMatched: (params) => {
    return axios.get('/get_matched_storerecords', { params: params })
  }
};

export const transportService = {
  match: (params) => {
    return axios.post('/match_vehicle', params)
  },
  listAll: (params) => {
    return axios.get('/list_vechileinfos', { params: params })
  },
  getRecommendPath: (params) => {
    return axios.get('/path_recommend', { params: params })
  },
};

export const authService = {
  login: (params) => {
    return axios.post('/login', { params: params });
  }
};
