import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export enum ROUTES {
  HOME = 'home',
  SEARCH = 'search'
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: `/`,
      name: ROUTES.HOME,
      component: Home,
    },
    {
      path: `/${ROUTES.SEARCH}/:category/:query`,
      name: ROUTES.SEARCH,
      component: Search,
      props: true,
    },
  ],
});
