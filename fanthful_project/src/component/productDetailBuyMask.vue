 <template>
  <div class="buy_mask" style>
    <div class="opacity_mask"></div>
    <div class="editor">
      <div style="padding: 0px 12px;">
        <div class="intro">
          <p class="ch_name">育碧 汤姆克兰西全境封锁2 T恤 - LINCOLN</p>
          <p class="en_name">TCTD2 T-shirt - LINCOLN</p>
          <p class="price" style="height: 20px;">
            <span class="now_price">￥88.0</span>
            <span class="old_price">￥99.0</span>
            <span class="pre_sale">预售</span>
          </p>
        </div>
        <div class="size_or_color clearfix">
          <p class="title">* 尺寸</p>
          <div class="box">
            <div class="style style_selected">XXL</div>
            <div class="style">XL</div>
            <div class="style">L</div>
            <div class="style">M</div>
            <div class="style">S</div>
          </div>
          <div class="clb"></div>
        </div>
        <!---->
        <div class="num">
          <p class="title">* 数量</p>
          <div>
            <div class="weui-cell">
              <span class="minusNum">-</span>
              <input type="number" readonly value="1">
              <span class="addNum">+</span>
            </div>
            <!---->
          </div>
        </div>
      </div>
      <div class="close_mask">
        <img width="100%" src="../assets/close.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.buy_mask {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
}
.opacity_mask {
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  z-index: 4;
}
.editor {
  position: absolute;
  bottom: 47px;
  left: 0;
  padding: 12px 0;
  min-height: 240px;
  width: 100%;
  background: #000;
}
.close_mask {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 13px;
}
.close_mask img {
  width: 100%;
}
.buy_mask .intro {
  padding-bottom: 10px;
  border-bottom: 1px solid #595959;
}
.buy_mask  .intro {
  padding-right: 50px;
}
.buy_mask .intro p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.buy_mask  .ch_name {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #e9e9e9;
  letter-spacing: 0;
  line-height: 22px;
}
.buy_mask .en_name {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #797575;
  letter-spacing: 0;
  line-height: 18px;
  padding: 5px 0;
}
.buy_mask .intro .price {
  line-height: 20px;
}
.buy_mask .intro .price span {
  display: block;
  float: left;
  text-align: center;
  line-height: 17px;
  margin-right: 10px;
}
.buy_mask .intro .price .now_price {
  font-size: 16px;
  color: #bf1920;
  letter-spacing: 0;
}
.buy_mask .intro .price .old_price {
  color: #797575;
  text-decoration: line-through;
}
.buy_mask .intro .price .pre_sale {
  line-height: 17px;
  background-image: linear-gradient(-90deg, #82b7a5, #4b806c 75%);
  background-repeat: no-repeat;
  width: 40px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #202422;
  letter-spacing: 0;
}
.size_or_color {
  border-bottom: 1px solid #595959;
  padding-bottom: 15px;
}
.buy_mask .title {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0;
  line-height: 18px;
  margin-top: 10px;
}
.style {
  background: #fff;
  border-radius: 1px;
  list-style: none;
  float: left;
  font-family: PingFangSC-Medium;
  font-size: 15px;
  color: #000;
  line-height: 16px;
  letter-spacing: 0;
  padding: 6px 20px;
  margin-right: 15px;
  margin-top: 15px;
  border: 1px solid #fff;
}
.style_selected {
  background: #fff url(../assets/check.png) no-repeat;
  background-size: contain;
  background-position: 100% 100%;
  border: 1px solid #bf1920;
}
.weui-cell {
  padding: 12px 0;
}
.weui-cell span {
  display: inline-block;
  background-color: #fff;
  border: 1px solid #e3e3e3;
  text-align: center;
  width: 36px;
  height: 28px;
  line-height: 28px;
  font-size: 30px;
}
.minusNum {
  border-radius: 2px 0 0 2px;
}
.addNum {
  border-radius: 0 2px 2px 0;
}
.weui-cell input {
  width: 50px;
  height: 28px;
  background: transparent;
  color: #fff;
  border-radius: 0;
  border: 1px solid #e3e3e3;
  border-right: 0;
  border-left: 0;
  font-size: 18px;
  line-height: 20px;
  font-family: PingFangSC-Regular;
  vertical-align: top;
  text-align: center;
}
</style>

