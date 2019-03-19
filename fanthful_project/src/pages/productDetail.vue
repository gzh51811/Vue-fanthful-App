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
    <productDetailBuyMask></productDetailBuyMask>
  </div>
</template>
<script>
import productDetailBanner from "../component/productDetailBanner.vue";
import productDetailMsg from "../component/productDetailMsg.vue";
import productDetailFooter from "../component/productDetailFooter";
import productDetailBuyMask from "../component/productDetailBuyMask";
export default {
  components: {
    productDetailBanner,
    productDetailMsg,
    productDetailFooter,
    productDetailBuyMask
  }
};
</script>
<style scoped>
.productDetail {
  height: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
}
#main {
  flex: 1;
  overflow-x: hidden;
}
#footer{
  position: relative;
  z-index: 99;
}
</style>

