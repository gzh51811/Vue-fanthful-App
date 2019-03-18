<template>
  <div class="GoodsList">
    <div id="header">
      <goodsListHeader></goodsListHeader>
      <goodsListSortNav></goodsListSortNav>
    </div>
    <div id="main">
      <ProductList></ProductList>
    </div>
  </div>
</template>
<script>
import goodsListHeader from "../component/goodsListHeader.vue";
import goodsListSortNav from "../component/goodsListSortNav.vue";
import ProductList from "../component/Product_list.vue";
export default {
  components: { goodsListHeader, goodsListSortNav, ProductList }
};
</script>
<style scoped>
.GoodsList {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #000;
}

#main {
  flex: 1;
  overflow-x: hidden;
}
</style>


