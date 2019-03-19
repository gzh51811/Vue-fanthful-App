import Vue from "vue";
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Search from "../pages/Search.vue";

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
            path: '/login',
            component:Login
        },
        {
            path: '/register',
            component:Register
        },
         {
             path:'/search',
             component:Search
         }
    ]
})
export default router;