<template>
  <div class="goodsListHeader">
    <div class="fl break">
      <img src="../assets/break.png">
    </div>
    <div class="name fl">
      <span>{{goodsListName.name}}</span>
    </div>
    <div class="search fr">
      <img src="../assets/search.png" alt>
    </div>
    <div class="cart fr">
      <img src="../assets/cart.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    goodsListName(){
      return this.$store.state.goodsListName
    }
  }
  
};
</script>
<style scoped>
.goodsListHeader {
  height: 30px;
  padding: 7px 10px;
  display: flex;
  border-bottom: 1px solid #6f6f6f;
}
.break {
  width: 30px;
  height: 30px;
}
.break img {
  width: 100%;
}
.name {
  flex: 1;
  text-align: center;
  padding-top: 4px;
  color: #fff;
}
.name span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.search,
.cart {
  width: 33px;
  height: 33px;
}
.search {
  margin-right: 10px;
}
.search img {
  width: 100%;
}
.cart img {
  width: 100%;
}
</style>

