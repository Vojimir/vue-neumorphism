import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '.././components/Login';
import Register from '.././components/Register';

// import store from '.././store/index';

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          guest: true
        }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        guest: true
      }
  },
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  // router.beforeEach((to, from, next) => {
  //   const isUserLoggedIn = store.getters.isUserAuthenticated
  //   if (!to.meta.guest && !isUserLoggedIn) {
  //     next({
  //       name: 'login',
  //       path: '/login'
  //     })
  //   }
  //   return next()
  // })

  export default router