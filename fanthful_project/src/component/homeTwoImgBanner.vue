<template>
  <div class="two_img_banner">
    <div>
      <!---->
      <a>
        <img
          src="http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20180514095500035890.jpg"
          width="100%"
        >
      </a>
    </div>
    <div>
      <!---->
      <a>
        <img
          src="http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20190224235103818490.jpg"
          width="100%"
        >
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.two_img_banner {
  margin-top: 10px;
  display: flex;
  width: 100%;
}
.two_img_banner div {
  width: 50%;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  padding: 15px 12px;
}
.two_img_banner div:first-child {
  padding-right: 8px;
}
.two_img_banner div:last-child {
  padding-left: 5px;
}
.two_img_banner div img {
  height: 100%;
}
</style>

