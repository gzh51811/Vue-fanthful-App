<template>
  <div class="product_list clearfix">
    <div v-for="(proList,idx) in proLists" :key="idx">
      <div class="product_item">
        <a>
          <div class="my_image_box">
            <img :src="proList.imgLink" width="100%">
            <!-- <div
              class="pro_img"
              style="background-image: url(&quot;http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224305739459.jpg&quot;);"
            ></div>-->
            <!---->
          </div>
          <p class="product_name">{{proList.proName}}</p>
          <p class="product_name_en">{{proList.englishName}}</p>
          <div class="price">
            <span class="product_price">￥{{proList.proPrice}}</span>
            <span class="discount_rate">{{discountRate(proList.proPrePrice,proList.proPrice)}}</span>
            <span class="pre_sale">预售</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      proLists: [
        {
          deleteFlag: 2,
          deliverTime: 1556553600000,
          discountRate: 88,
          englishName: "TCTD2 Mobile Phone Case",
          imgLink:
            "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224004965958.jpg",
          indexIsShow: 2,
          isDiscount: "1",
          isExtension: 2,
          isPreSale: "1",
          isPutSale: 1,
          isSellOut: 2,
          limitBuyCount: null,
          proName: "育碧 汤姆克兰西全境封锁2 手机壳",
          proPrePrice: "59.0",
          proPrice: "52.0",
          productId: 6095
        },
        {
          deleteFlag: 2,
          deliverTime: null,
          discountRate: "",
          englishName: "Overwatch - Pharah Pixel T-shirt",
          imgLink:
            "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190217235005674395.jpg",
          indexIsShow: 2,
          isDiscount: "0",
          isExtension: 2,
          isPreSale: "2",
          isPutSale: 1,
          isSellOut: 2,
          limitBuyCount: null,
          proName: "暴雪守望先锋角色像素款T恤 - 法老之鹰",
          proPrePrice: "148.0",
          proPrice: "148.0",
          productId: 6094,
          saleTime: null
        }
      ]
    };
  },
  methods: {
    discountRate(proPrePrice, proPrice) {
      var res = (proPrice / proPrePrice - 1) * 100;
      return res.toFixed(0) + "%";
    }
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
.product_list > div:nth-child(even) .product_item {
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

