<template>
  <ul class="sortList">
    <li v-for="listName in listNames" :key="listName">{{listName}}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      listNames: [
        "默认",
        "按购买数量",
        "按浏览器",
        "按价格从高到低",
        "按价格从低到高"
      ]
    };
  }
};
</script>
<style scoped>
.sortList {
  background: #fff;
  position: relative;
}
.sortList::before {
  content: "";
  position: absolute;
  display: inline-block;
  border: 10px solid transparent;
   border-bottom-color: #fff;
   left: 50%;
   transform: translateX(-50%);
   top:-20px;
}
.sortList li {
  height: 45px;
  line-height: 45px;
}
</style>

