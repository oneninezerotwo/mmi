import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import List from './views/List.vue';
import Detail from './views/Detail.vue';
import Order from './views/Order.vue'
import SignIn from './views/SignIn.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/list',
      name: 'list',
      component: List,

    },
    {
      path: '/order',
      name: 'order',
      component: Order,

    },
    {
      // path: '/detail',
      path: '/detail/:id',
      name: 'detail',
      component: Detail,

    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
