import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Search from './views/Search.vue';
import Artist from './views/Artist.vue'
import Album from './views/Album.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router);

export enum ROUTES {
  HOME = 'home',
  SEARCH = 'search',
  ARTIST = 'artist',
  ALBUM = 'album',
  PAGE_NOT_FOUND = 'pageNotFound',
}

const routerInstance = new Router({
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
    {
      path: `/${ROUTES.ARTIST}/:id`,
      name: ROUTES.ARTIST,
      component: Artist,
      props: true,
    },
    {
      path: `/${ROUTES.ALBUM}/:id`,
      name: ROUTES.ALBUM,
      component: Album,
      props: true,
    },
    {
      path: '*',
      name: ROUTES.PAGE_NOT_FOUND,
      component: PageNotFound,
    },
  ],
});

export function inRoute(route: ROUTES) {
  return routerInstance.currentRoute.name === route
}

export default routerInstance
