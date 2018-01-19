// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import './style/usage/app.scss'	
import './components/modules/directives'
Vue.config.productionTip = false
import MintUI from 'mint-ui';
import'mint-ui/lib/style.css'
Vue.use(MintUI);
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
