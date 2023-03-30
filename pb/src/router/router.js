import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import DashBoard from '@/components/DashBoard.vue'
import NewPatient from '@/components/NewPatient.vue'
import RotaInvalida from '@/components/RotaInvalida.vue'

import { getAuth, onAuthStateChanged } from "firebase/auth"
import app from "../../firebase"

const auth = getAuth(app)


function checarLogin() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}


const routes = [
  {
    path: '/*',
    name: 'RotaInvalida',
    component: RotaInvalida
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
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
  {
    path: '/newPatient',
    name: 'NewPatient',
    component: NewPatient
  }
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


router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/*');
  } else if (to.meta.requiresAuth) {
    checarLogin().then(userIsAuthenticated => {
      if (userIsAuthenticated) {
        next();
      } else {
        next('/');
      }
    });
  } else {
    next();
  }
});
export default router