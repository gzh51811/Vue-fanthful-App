<template>
  <router-view></router-view>
 
</template>

<script>
import Vue from "vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

export default {
  router
};
</script>

<style>
html,body{
  height:100%;
  width:100%;
  background: #000;
  

}
</style>
