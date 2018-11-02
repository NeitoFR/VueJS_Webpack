import Vue from "vue";
import Router from "vue-router";
import Trainer from "../pages/Trainer";
import HomePage from "../pages/HomePage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/training"
    },
    {
      path: "/homepage",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/training",
      name: "Trainer",
      component: Trainer
    }
  ]
});
