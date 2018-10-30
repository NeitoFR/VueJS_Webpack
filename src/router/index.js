import Vue from 'vue'
import Router from 'vue-router'
import Trainer from '@/components/Trainer/Trainer';
import HomePage from '@/components/HomePage/HomePage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/training',
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/training',
      name: 'Trainer',
      component: Trainer
    }
  ]
})
