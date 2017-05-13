import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import auth from '@/utils/auth';

// 按chunk分块
// 主页
const homePage = r => require.ensure([], () => r(require('@/pages/homePage')), 'homePage');
// 登录注册
const login = r => require.ensure([], () => r(require('@/pages/login')), 'login');
const signUp = r => require.ensure([], () => r(require('@/pages/login/signUp')), 'login');
const signIn = r => require.ensure([], () => r(require('@/pages/login/signIn')), 'login');
// 共享平台
const shareDepot = r => require.ensure([], () => r(require('@/pages/sharePlatform/shareDepot')), 'sharePlatform');
const shareCar = r => require.ensure([], () => r(require('@/pages/sharePlatform/shareCar')), 'sharePlatform');
// 运输管理
const transportRecord = r => require.ensure([], () => r(require('@/pages/transportation/transportRecord')), 'transportation');
const recommendPath = r => require.ensure([], () => r(require('@/pages/transportation/recommendPath')), 'transportation');
const cBusiness = r => require.ensure([], () => r(require('@/pages/transportation/cBusiness')), 'transportation');
const cBusinessDetail = r => require.ensure([], () => r(require('@/pages/transportation/children/cBusinessDetail')), 'transportation');
const transportDetail = r => require.ensure([], () => r(require('@/pages/transportation/children/transportDetail')), 'transportation');
//仓储管理
const goodsRecord = r => require.ensure([], () => r(require('@/pages/wareHouse/goodsRecord')), 'wareHouse');
const constructionPlan = r => require.ensure([], () => r(require('@/pages/wareHouse/constructionPlan')), 'wareHouse');
const goodsDetail = r => require.ensure([], () => r(require('@/pages/wareHouse/children/goodsDetail')), 'wareHouse');

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: App, // 顶层路由，对应index.html
      children: [  // 二级路由。对应App.vue
        // 地址为空时跳转主页面
        {
          path: '',
          redirect: '/login'
        },
        // 登录注册
        {
          path: '/login',
          component: login,
          children: [
            {
              path: '',
              component: signIn
            },
            {
              path: 'signUp',
              component: signUp
            }
          ]
        },
        // 主页
        {
          path: '/homePage',
          component: homePage
        },
        // 共享平台
        {
          path: '/shareCar',//共享拼车
          component: shareCar,
          meta: { requireLogin: true }
        },
        {
          path: '/shareDepot',//共享拼仓
          component: shareDepot,
          meta: { requireLogin: true }
        },

        // 运输管理
        {
          path: '/transportRecord',//运输记录
          component: transportRecord,
          meta: { requireLogin: true },
          children: [
            {
              path: 'transportDetail',
              component: transportDetail,
              meta: { requireLogin: true }
            }
          ]
        },
        {
          path: '/recommendPath', //推荐路径
          component: recommendPath,
          meta: { requireLogin: true }
        },
        {
          path: '/cBusiness', //往返综合业务
          component: cBusiness,
          meta: { requireLogin: true },
          children: [
            {
              path: 'cBusinessDetail',
              component: cBusinessDetail,
              meta: { requireLogin: true }
            }
          ]
        },

        // 仓储管理
        {
          path: '/goodsRecord', //货物记录
          component: goodsRecord,
          meta: { requireLogin: true },
          children: [
            {
              path: 'goodsDetail',
              component: goodsDetail,
              meta: { requireLogin: true }
            }
          ]
        },
        {
          path: '/constructionPlan', //建设规划
          component: constructionPlan,
          meta: { requireLogin: true }
    },

  ]
},
],
mode: 'hash',
  strict
:
process.env.NODE_ENV !== 'production'
})
;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) {
    // 如果这个页面要求登录，则检查是否登录了
    // 如果未登录，则跳转到登录页面
    if (!auth.checkIfLoggedIn()) {// TODO: 保存上一次请求的url，登陆后直接跳转过去
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router;

