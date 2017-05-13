/**
 * 数据服务包装
 */

import axios from 'axios';
import { buildUnixTime } from '@/utils/formateDate';
import { baseURL } from '@/config';
import mock from './mock';

if (process.env.NODE_ENV === 'development') {
  mock();
}

export const storeService = {
  match: (params) => {
    return axios.post('/match_storehouse', params)
  },
  listAll: (params) => {
    return axios.post('/list_storerecords', params)
  },
  getMatched: (params) => {
    return axios.post('/get_matched_storerecords', params)
  }
};

export const transportService = {
  match: (params) => {
    return axios.post('/match_vehicle', params)
  },
  listAll: (params) => {
    return axios.get('/list_vechileinfos', {params: params})
  },
  getRecommendPath: (params) => {
    return axios.get('/path_recommend', {params: params})
  },
};

export const authService = {
  login: (params) => {
    return axios.post('/login', {params: params});
  }
};
