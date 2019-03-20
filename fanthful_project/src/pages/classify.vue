<template>
    <div class="classify">
         <classifyHeader class="classifyHeader"></classifyHeader>
         <classifyAside class="classifyAside"></classifyAside>
         <!-- <homeFooter class="homeFooter"></homeFooter> -->
     </div>
 </template>
<script> 
 // import homeFooter from "../component/homeFooter.vue";
 import classifyHeader from "../component/classifyHeader.vue";
 import classifyAside from "../component/classifyAside.vue";
 export default {
     
     components:{
        //  homeFooter,
         classifyHeader,
         classifyAside
     }
    
 }
 </script>
 <style lang="scss" scoped>
     .classify{
         position:relative;

     }
     .classifyHeader{
         position:fixed;
         top:0;
         left:0;
         z-index:100;
     }
     .homeFooter{
         position: fixed;
         bottom:0;
         left:0;
     }
 </style>
