import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import Index from "../pages/Index"
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/index"
      
    },
    {
      path: "/home",
      name: 'Home',
      component: Home
    },
    {
      path: "/index",
      name: 'Index',
      component: Index
    }
  ]
});
