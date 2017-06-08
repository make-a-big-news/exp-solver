/**
 * 数据服务包装
 */

import axios from 'axios';
import { buildUnixTime } from '@/utils/formateDate';
import { baseURL } from '@/config';
import MockAdapter from 'axios-mock-adapter';
import intercepter from '../mock';

const baseUrl = 'http://162.243.154.46:8000/';
const goMock = 0;

axios.defaults.baseURL = baseUrl;

if (process.env.NODE_ENV === 'development' && goMock === 1) {
  const mock = new MockAdapter(axios);
  intercepter(mock);
}


export const storeService = {
  match: (params) => {
    return axios.post('/match_storehouse', params)
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
  listAll: () => {
    return axios.get('/list_vechileinfos')
  },
  getMatched: (params) => {
    return axios.get('/get_matched_vehicle', { params: params })
  },
  getRecommendPath: (params) => {
    return request.get('/path_recommend', params)
  },
};

export const authService = {
  login: (params) => {
    return axios.post('/login', { params: params });
  }
};
