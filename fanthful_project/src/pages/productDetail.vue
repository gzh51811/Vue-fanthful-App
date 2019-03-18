<template>
  <div class="productDetail">
    <div id="main">
      <!-- <div class="detailBanner"> -->
        <productDetailBanner></productDetailBanner>
      <!-- </div> -->
      <productDetailMsg></productDetailMsg>
    </div>
    <div id="footer">
      <productDetailFooter></productDetailFooter>
    </div>
  </div>
</template>
<script>
import productDetailBanner from "../component/productDetailBanner.vue";
import productDetailMsg from "../component/productDetailMsg.vue";
import productDetailFooter from "../component/productDetailFooter";

export default {
  components: { productDetailBanner, productDetailMsg, productDetailFooter }
};
</script>
<style scoped>
.productDetail {
    height: 100%;

  display: flex;
  flex-direction: column;
}
#main {
  flex: 1;
  overflow-x: hidden;
}
</style>

