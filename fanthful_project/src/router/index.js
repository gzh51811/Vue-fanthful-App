import Vue from "vue";
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Search from "../pages/Search.vue";
import Search2 from "../pages/Search2.vue";


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
         },
         {
             path:'/search2',
             component:Search2
         }
    ]
})
export default router;