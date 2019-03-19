<template>
  <div class="home">
    <div id="header">
      <homeHeader></homeHeader>
    </div>
    <div id="main">
      <homeBanner1 :banner1="bannerMsg.banner1" ></homeBanner1>
      <homeBannerSep1 :banner2="bannerMsg.banner2" ></homeBannerSep1>
      <homeBannerSep2 :banner3="bannerMsg.banner3"></homeBannerSep2>
      <homeSeparator></homeSeparator>
      <homeHotList></homeHotList>
      <homeSeparator></homeSeparator>
      <homeHotList></homeHotList>
      <homeSeparator></homeSeparator>
      <homeHotList></homeHotList>
      <homeSeparator></homeSeparator>
      <ProductList></ProductList>
    </div>
    <div id="footer">
      <footers></footers>
    </div>
  </div>
</template>
<script>
import homeHeader from "../component/homeHeader.vue";
import homeBanner1 from "../component/homeBanner1.vue";
import homeBannerSep1 from "../component/homeBannerSep1.vue";
import homeBannerSep2 from "../component/homeBannerSep2.vue";
import homeSeparator from "../component/homeSeparator.vue";
import homeHotList from "../component/homeHotList.vue";
import ProductList from "../component/Product_list.vue";
import footers from "../component/homeFooter.vue";

export default {
  data() {
    return {
      bannerMsg: []
    };
  },
  methods: {
    async getBannerMsg() {
      let res = await this.$axios.get("http://localhost:10086/banner");
      this.bannerMsg = res.data.data;
      console.log(this.bannerMsg);

    }
  },
  components: {
    homeHeader,
    homeBanner1,
    homeBannerSep1,
    homeBannerSep2,
    homeSeparator,
    homeHotList,
    ProductList,
    footers
  },
  created() {
    this.getBannerMsg();
  }
};
</script>
<style scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #000;
}
#header {
  height: 45px;
}
#main {
  flex: 1;
  overflow-x: hidden;
}
</style>

