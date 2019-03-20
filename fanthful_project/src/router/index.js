import Vue from "vue";
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
import Goodslist from '../pages/godsList.vue';
import productDetail from '../pages/productDetail.vue';
import classify from '../pages/classify.vue';
import cart from '../pages/cart.vue';
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/goodslist',
            component: Goodslist
        },
        {
            path: '/productDetail',
            component: productDetail
        }, {
            path: '/classify',
            component: classify
        }, {
            path: '/cart',
            component: cart

        }
    ]
})
export default router;