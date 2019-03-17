import Vue from "vue";
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
import Goodslist from '../pages/godsList.vue';

Vue.use(VueRouter);
let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/goodslist',
            component:Goodslist
        }
    ]
})
export default router;