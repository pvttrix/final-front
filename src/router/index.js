import { createRouter, createWebHashHistory } from 'vue-router'
import Game from '../views/Game'
import Registration from "../views/Registration";
import Login from "../views/Login";

const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
