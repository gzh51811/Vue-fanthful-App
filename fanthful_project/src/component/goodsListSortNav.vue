<template>
  <div class="sortNav">
    <div class="qty">商品数量:{{goodsqty}}件</div>
    <div :class="{sortBtn:1,open:state}" @click="sortListBtn()">
      <span>{{value}}</span>
      <i :class="{up:!state,down:state}"></i>
    </div>
    <div id="sortList" v-show="state">
      <godsListSortList v-on:changeState="sortListBtn"></godsListSortList>
    </div>
  </div>
</template>
<script>
import godsListSortList from "./godsListSortList.vue";

export default {
  data() {
    return {
      state: false,
      value: "默认"
    };
  },
  computed: {
    goodsqty() {
      return this.$store.state.goodsQty;
    }
  },
  components: { godsListSortList },
  methods: {
    sortListBtn(condition = "默认") {
      this.state = !this.state;
      this.value = condition;
    }
  }
};
</script>
<style scoped>
.sortNav {
  height: 30px;
  padding: 7px 10px;
  position: relative;
}
.sortNav > div {
  display: inline-block;
  width: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
}
.qty {
  color: #fff;
}
.sortBtn {
  background: #fff;
  color: #6f6f6f;
  /* margin-right: 10px; */
}
.open {
  background: red;
}
.sortBtn i {
  display: inline-block;
  border: 7px solid transparent;
  margin-left: 15px;
  margin-bottom: 3px;
}
.sortBtn .up {
  border-bottom-color: #000;
  /* vertical-align: middle; */
  /* transform: rotateX(180deg); */
}
.sortBtn .down {
  border-top-color: #fff;
  vertical-align: bottom;
  /* transform: rotateX(180deg); */
}
#sortList {
  position: absolute;
  z-index: 2;
  right: 0;
  top: 45px;
  width: 47%;
  background: #000;
  padding: 7px 10px;
}
</style>

