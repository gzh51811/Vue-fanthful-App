<template>
  <div class="productDetail">
    <div id="main">
      <!-- <div class="detailBanner"> -->
      <productDetailBanner :bannerImg="goodsDetail.imgLink"></productDetailBanner>
      <!-- </div> -->
      <productDetailMsg :bannerMsg="goodsDetail"></productDetailMsg>
    </div>
    <div id="footer">
      <productDetailFooter></productDetailFooter>
    </div>
    <!-- <productDetailBuyMask :bannerMsg="goodsDetail"></productDetailBuyMask> -->
  </div>
</template>
<script>
import productDetailBanner from "../component/productDetailBanner.vue";
import productDetailMsg from "../component/productDetailMsg.vue";
import productDetailFooter from "../component/productDetailFooter";
import productDetailBuyMask from "../component/productDetailBuyMask";
export default {
  data() {
    return {
      goodsDetail:{}
    };
  },
  computed: {
    productId() {
      return this.$route.query.productId;
    }
  },
  methods: {
    async getGoodsDetail() {
      let res = await this.$axios.get("http://localhost:10086/goodlist", {
        params: {
          productId: this.productId
        }
      });
      this.goodsDetail=res.data.data[0]
      console.log(this.goodsDetail);
    }
  },
  components: {
    productDetailBanner,
    productDetailMsg,
    productDetailFooter,
    productDetailBuyMask
  },
  created() {
    this.getGoodsDetail();
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
#footer {
  position: relative;
  z-index: 99;
}
</style>

