// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/shared-styles.css'
import router from './router/router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
<<<<<<< HEAD
  template: '<App/>'
});
=======
  template: '<App/>',
})
>>>>>>> 96c1b1f12c060c3d9863ecaa8d3ac0772baac669
