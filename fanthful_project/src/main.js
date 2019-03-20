import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store';
Vue.config.productionTip = false
import 'swiper/dist/css/swiper.css';


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')