/**
 * 数据服务包装
 */

import axios from 'axios';
import { buildUnixTime } from '@/utils/formateDate';
import { baseURL } from '@/config';
import mock from './mock';

const request = axios.create({
  // baseURL: 'http://162.243.154.46:8000',
});

if (process.env.NODE_ENV === 'development') {
  mock();
}

export const storeService = {
  match: (params) => {
    return axios.post('http://162.243.154.46:8000/match_storehouse', params)
  },
  listAll: () => {
    return request.get('/list_storerecords')
  },
  getMatched: (params) => {
    return request.get('/get_matched_storerecords', { params: params })
  }
};

export const transportService = {
  match: (params) => {
    return request.post('/match_vehicle', params)
  },
  listAll: (params) => {
    return request.get('/list_vechileinfos', { params: params })
  },
  getRecommendPath: (params) => {
    return request.get('/path_recommend', { params: params })
  },
};

export const authService = {
  login: (params) => {
    return request.post('/login', { params: params });
  }
};
