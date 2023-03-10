import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'



const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },

  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  /*
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
    meta: {
      requiresAuth: true
    }

  }
  */
]


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router