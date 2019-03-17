<template>
  <div class="hot_list">
    <div v-for="(img,idx) in imgs" :key="idx">
      <!---->
      <a>
        <img :src="img" width="100%">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20181213115602934250.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20181213115602934250.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20181213115602934250.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20181213115602934250.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20181213115602934250.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20181213115602934250.jpg",
        "http://datafanthfuloss.oss-cn-shanghai.aliyuncs.com/cpsupload/pic/20181213115602934250.jpg"
      ]
    };
  }
};
</script>
<style scoped>
.hot_list {
  margin-top: 15px;
  margin-bottom: 25px;
  width: 100%;
}
.hot_list > div {
  margin: 10px 12px;
}
</style>

