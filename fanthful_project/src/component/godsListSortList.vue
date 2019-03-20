<template>
  <ul class="sortList">
    <li
      v-for="(listName,idx) in listNames"
      :class="{currentCheckStyle:current==idx}"
      :key="listName"
      @click="changeIdx(idx)"
    >{{listName}}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      listNames: [
        "默认",
        "按购买数量",
        "按浏览器",
        "按价格从高到低",
        "按价格从低到高"
      ]
    };
  },
  methods: {
    changeIdx(idx) {
      this.current = idx;
      this.$emit('changeState',this.listNames[idx]);
    }
  }
};
</script>
<style scoped>
.sortList {
  background: #fff;
  position: relative;
}
.currentCheckStyle {
  background: red;
  color: #fff;
}
.sortList::before {
  content: "";
  position: absolute;
  display: inline-block;
  border: 10px solid transparent;
  border-bottom-color: #fff;
  left: 50%;
  transform: translateX(-50%);
  top: -20px;
}
.sortList li {
  height: 45px;
  line-height: 45px;
}
</style>

