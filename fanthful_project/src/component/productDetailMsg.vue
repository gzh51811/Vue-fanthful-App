<template>
  <div class="detailMsg">
    <div class="main">
      <div class="intro">
        <p class="ch_name">育碧 汤姆克兰西全境封锁2 T恤 - LINCOLN</p>
        <p class="en_name">TCTD2 T-shirt - LINCOLN</p>
        <p class="price" style="height: 20px;">
          <span class="now_price">￥88.0</span>
          <span class="old_price">￥99.0</span>
          <span class="pre_sale">预售</span>
        </p>
        <p class="pre_sale_time">预售截止时间：2019-04-30</p>
      </div>
      <div class="details">
        <p class="title">商品详情</p>
        <p class="pro_content">
          汤姆克兰西全境封锁2 LINCOLN T恤
          育碧官方正版授权，FANTHFUL设计开发
          材质：棉
          尺码：S / M / L / XL / XXL
          款式：LINCOLN
        </p>
        <div class="img_list">
          <img
            :src="detailImg"
            v-for="(detailImg,idx) in detailImgs"
            :key="idx"
            style="width: 100%; margin: 10px 0px;"
          >
        </div>
        <p class="title">包装和快递说明</p>
        <p class="service">现货发货时间：2个工作日；预售按预售的发货时间</p>
      </div>
      <div class="related">
        <div class="related_product_list">
          <p class="tite">相关商品</p>
          <ul>
            <li class="border_bottom">
              <a class>
                <div
                  class="my_img"
                  style="background-image: url(&quot;http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224305787672.jpg&quot;);"
                ></div>
                <div class="text">
                  <p class="ch_name">育碧 汤姆克兰西全境封锁2 T恤 - UNITE</p>
                  <p class="en_name">TCTD2 T-shirt - UNITE</p>
                </div>
              </a>
            </li>
          </ul>
          <div class="check_all">
            <a class>
              <p>查看所有相关商品(4)</p>
              <i class="iconfont icon-icon_arrow_right relatedBtn"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>
<script>
import "../assets/iconfont/font_1092277_zjgdon691oi/iconfont.css";
export default {
  data() {
    return {
      detailImgs: [
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224305689518.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224305689518.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224305689518.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224305689518.jpg"
      ],
      related: [
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224305787672.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224305787672.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224305787672.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190314224305787672.jpg"
      ]
    };
  }
};
</script>
<style scoped>
.detailMsg {
  padding: 12px;
}
.intro {
  padding-bottom: 10px;
  border-bottom: 1px solid #595959;
}
.ch_name {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #e9e9e9;
  letter-spacing: 0;
  line-height: 22px;
}
.en_name {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #797575;
  letter-spacing: 0;
  line-height: 18px;
  padding: 5px 0;
}
.price {
  height: 20px;
  line-height: 20px;
}
.now_price {
  font-size: 16px;
  color: #bf1920;
  letter-spacing: 0;
}
.old_price {
  color: #797575;
  text-decoration: line-through;
}
.pre_sale {
  line-height: 17px;
  background-image: linear-gradient(-90deg, #82b7a5, #4b806c 75%);
  background-repeat: no-repeat;
  width: 40px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #202422;
  letter-spacing: 0;
}
.intro .price span {
  display: block;
  float: left;
  text-align: center;
  line-height: 17px;
  margin-right: 10px;
}
.pre_sale_time {
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #797575;
  letter-spacing: 0;
  line-height: 16px;
  border-top: 1px solid #595959;
  padding-top: 10px;
  margin-top: 10px;
}
.title {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #e9e9e9;
  letter-spacing: 0;
  line-height: 24px;
  padding: 5px 0;
}
.pro_content {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #797575;
  letter-spacing: 0;
  line-height: 24px;
}
.service {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #797575;
  letter-spacing: 0;
  line-height: 24px;
}
.related_product_list {
  background: #242424;
  border-radius: 1px;
  margin-top: 20px;
}
.related_product_list .tite {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #e9e9e9;
  letter-spacing: 0;
  line-height: 41px;
  border-bottom: 1px solid #595959;
  padding: 0 15px;
}
.related_product_list ul {
  padding: 0 10px;
}
.related_product_list li {
  height: 100px;
  padding-left: 100px;
  list-style: none;
  position: relative;
}
.border_bottom::before {
  content: "";
  display: block;
  height: 0;
  width: 100%;
  border-bottom: 1px solid #595959;
  position: absolute;
  left: 0;
  bottom: 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.my_img {
  width: 80px;
  height: 80px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  position: absolute;
  left: 10px;
  top: 10px;
}
.related_product_list .text {
  padding: 20px 0;
}
.related_product_list .text p {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  letter-spacing: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
}
.ch_name {
  color: #fff;
}
.en_name {
  color: #797575;
}
.check_all {
  padding-left: 15px;
  position: relative;
}
.check_all p {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0;
  line-height: 50px;
  display: inline-block;
}
.relatedBtn {
  width: 30px;
  height: 30px;
  display: inline-block;
  color: #fff;
  float: right;
  line-height: 50px;
  margin-right: 10px;
}
</style>
