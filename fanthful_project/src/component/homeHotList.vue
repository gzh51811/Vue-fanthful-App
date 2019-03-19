<template>
  <div class="hot_list">
    <div v-for="hotGoodsList in hotGoodsLists" :key="hotGoodsList._id">
      <!---->
      <a>
        <img :src="hotGoodsList.bannerImg" width="100%">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props:['hotGoodsLists']
};
</script>
<style scoped>
.hot_list {
  margin-top: 15px;
  margin-bottom: 25px;
  width: 100%;
  min-height: 200px;
}
.hot_list > div {
  margin: 10px 12px;
}
</style>

