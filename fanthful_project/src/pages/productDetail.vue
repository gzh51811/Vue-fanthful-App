<template>
  <div class="productDetail">
    <div id="main">
      <div class="detailBanner">
        <productDetailBanner></productDetailBanner>
      </div>
        <productDetailMsg></productDetailMsg>

    </div>
    <div id="footer"></div>
  </div>
</template>
<script>
import productDetailBanner from "../component/productDetailBanner.vue";
import productDetailMsg from "../component/productDetailMsg.vue";

export default {
  components: {productDetailBanner,productDetailMsg}
};
</script>
