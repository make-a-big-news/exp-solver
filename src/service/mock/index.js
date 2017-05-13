import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

export default function () {
  // 仓库信息发布
  mock.onPost('/match_storehouse', {
    params: {
      amount: 3,
      start_time: '2017-04-14 20:00:00',
      duration: 2,
      rent_want: 1
    }
  }).reply(200, {
    status: 1
  });
  // 显示所有发布信息
  mock.onGet('/list_storerecords').reply(200, {
    start_time: "2017-04-05 00:00:00",
    duration: 90,
    number_code: 1,
    rent_want: 1,
    if_matched: 1,
    matched_pairs: ['xx', 'yy'],
    amount: '40'
  });
  // 获取匹配结果
  mock.onGet('/get_matched_storerecords', {
    params: {
      number_code: 1 //和显示发布信息这里code的一样
    }
  }).reply(200, {
    start_time: "2017-04-05 00:00:00",
    duration: 90,
    number_code: 1,
    rent_want: 1,
    if_matched: 1,
    matched_pairs: ['xx', 'yy'],
    amount: '40'
  });
  // 发布车辆信息
  mock.onPost('/match_vehicle', {
    params: {
      start_time: '2017-04-12 20:20:00',
      duration: 2,
      quantity: 20,
      if_vehicle: 1
    }
  }).reply(200, {
    status: 1
  });
  // 展示车辆信息
  mock.onGet('/list_vechileinfos').reply(200, {
    numCode: 1,
    startTime: 1440000000,
    endTime: 213,
    quantity: 40,
    isCar: '有',
    state: 0,
    matchPairs: ['zz', 'aa', 'qq']
  });
  // 路径匹配
  mock.onGet('/path_recommend', {
    params: {
      startVertex: 'V0',
      endVertex: 'V7',
      proportion: 0.5
    }
  }).reply(200, {
    results: 'V0 --> V1 --> V3 --> V5 --> V7'
  });
  // 登录,测试账号
  mock.onPost('/login', {
    params: {
      username: 'test',
      password: '123'
    }
  }).reply(200, {
    status: 1
  });
}
