<template>
  <div class="sortNav">
    <div class="qty">商品数量:63件</div>
    <div class="sortBtn">
      <span>默认</span>
      <i class="up"></i>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.sortNav {
  height: 30px;
  padding: 7px 10px;
}
.sortNav > div {
  display: inline-block;
  width: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
}
.qty {
  color: #fff;
}
.sortBtn {
  background: #fff;
  color: #6f6f6f;
  /* margin-right: 10px; */
}
.sortBtn i {
  display: inline-block;
  border: 7px solid transparent;
  margin-left: 15px;
  margin-bottom: 3px;

}
.sortBtn .up {
  border-bottom-color: #000;
  /* vertical-align: middle; */
  /* transform: rotateX(180deg); */
}
.sortBtn .down {
  border-top-color: #fff;
  vertical-align: bottom;
  /* transform: rotateX(180deg); */
}
</style>

