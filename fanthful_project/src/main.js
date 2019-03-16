import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'swiper/dist/css/swiper.css';
new Vue({
  render: h => h(App),
}).$mount('#app')
