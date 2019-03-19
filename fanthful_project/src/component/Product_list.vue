<template>
  <div class="product_list clearfix">
    <div v-for="proList in proLists" :key="proList._id">
      <div class="product_item">
        <a>
          <div class="my_image_box">
            <img :src="proList.imgLink" width="100%">
          </div>
          <p class="product_name">{{proList.proName}}</p>
          <p class="product_name_en">{{proList.englishName}}</p>
          <div class="price">
            <span class="product_price">￥{{proList.proPrice}}.0</span>
            <span
              class="discount_rate"
              v-if="proList.isDiscount"
            >{{discountRate(proList.proPrePrice,proList.proPrice)}}</span>
            <span class="pre_sale" v-if="proList.isPreSale===1">预售</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["goodsMsgs"],
  watch: {
    goodsMsgs: function() {
      this.proLists = this.goodsMsgs;
    }
  },
  data() {
    return {
      proLists: []
    };
  },
  computed: {
    isRedirects() {
      return this.$store.state.goodsListName.gotoGoodslist;
    }
  },
  methods: {
    discountRate(proPrePrice, proPrice) {
      var res = (proPrice / proPrePrice - 1) * 100;
      return res.toFixed(0) + "%";
    },
    async getGoodsList() {
      if (this.$route.query.gotoGoodslist) {
        let res = await this.$axios.get("http://localhost:10086/goodlist");
        this.proLists = res.data.data.slice(0, 5);
        this.$store.commit("addGoodsQty", this.proLists.length);
        
      }
    }
  },
  created(){
    this.getGoodsList()
  }
};
</script>
<style scoped>
.product_list {
  margin-top: 10px;
}
.product_list > div {
  float: left;
  width: 50%;
}
.product_list > div:nth-child(odd) .product_item {
  padding-right: 6px;
}
.product_list > div:nth-child(2n) .product_item {
  padding-left: 6px;
}
.product_list .product_item {
  padding: 5px 12px;
  padding-bottom: 10px;
}
.my_image_box {
  position: relative;
  border: 1px solid #333;
  margin-bottom: 10px;
  width: 167px;
  height: 169px;
}
.my_image_box img {
  display: block;
  height: 100%;
}
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.product_name {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #f2f2f2;
  letter-spacing: 0;
  line-height: 17px;
}
.product_name_en {
  font-family: PingFangSC-Regular;
  font-size: 11px;
  color: #959da1;
  letter-spacing: 0;
  line-height: 17px;
}
.price {
  padding: 5px 0 20px;
}
.price span {
  display: block;
  float: left;
  height: 17px;
  text-align: center;
  line-height: 17px;
  margin-right: 10px;
}
.product_price {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #bf1920;
  letter-spacing: 0;
}
.discount_rate {
  background-image: linear-gradient(-78deg, #c9a83c, #986f1c);
  background-repeat: no-repeat;
  width: 40px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #21201e;
  letter-spacing: 0;
}
.pre_sale {
  background-image: linear-gradient(-90deg, #82b7a5, #4b806c 75%);
  background-repeat: no-repeat;
  width: 40px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #202422;
  letter-spacing: 0;
}
</style>

