<template>
  <div class="home">
    <div id="header">
      <homeHeader></homeHeader>
    </div>
    <div id="main">
      <homeBanner1 :banner1="bannerMsg.banner1"></homeBanner1>
      <homeBannerSep1 :banner2="bannerMsg.banner2"></homeBannerSep1>
      <homeBannerSep2 :banner3="bannerMsg.banner3"></homeBannerSep2>
      <homeSeparator :imgs="SeparatorImg.game"></homeSeparator>
      <homeHotList :hotGoodsLists="hotMsg.hotgamelist"></homeHotList>
      <homeSeparator :imgs="SeparatorImg.movie"></homeSeparator>
      <homeHotList :hotGoodsLists="hotMsg.hotmovielist"></homeHotList>
      <homeSeparator :imgs="SeparatorImg.tv"></homeSeparator>
      <homeHotList :hotGoodsLists="hotMsg.hottvlist"></homeHotList>
      <homeSeparator :imgs="SeparatorImg.bestsellers"></homeSeparator>
      <ProductList :goodsMsgs="goodsListMsg"></ProductList>
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
      bannerMsg: [],
      hotMsg: [],
      goodsListMsg:[],
      SeparatorImg: {
        game: require("../assets/game.png"),
        movie: require("../assets/movie.png"),
        tv: require("../assets/tv.png"),
        bestsellers: require("../assets/bestsellers.png")
      }
    };
  },
  methods: {
    async getBannerMsg() {
      let res = await this.$axios.get("/banner");
      this.bannerMsg = res.data.data;
      // console.log(res.data.data.banner2)
    },
    async getHotMsg() {
      let res = await this.$axios.get("/hotmsg");
      this.hotMsg = res.data.data;
      // console.log(res)

    },
     async getGoodsListMsg() {
      let res = await this.$axios.get("/goodlist");
      this.goodsListMsg = res.data.data;
      // console.log(res)

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
    this.getHotMsg();
    this.getGoodsListMsg();
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

