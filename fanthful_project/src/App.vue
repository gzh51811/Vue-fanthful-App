<template>
  <router-view></router-view>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
export default {
};
</script>

<style>

html,body{
  width: 100%;
  height: 100%;
  /* background: #000; */
}

</style>
