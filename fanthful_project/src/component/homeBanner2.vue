<template>
  <div class="banner1 banner2">
    <div class="swiper-container" id="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img,idx) in imgsa" :key="idx">
          <img :src="img" alt>
          <p class="ch">超级马里奥（马力欧）蘑菇小夜灯</p>
          <p class="en">Super Mario Mushroom Light</p>
        </div>
      </div>
      <!-- Add Pagination -->
    </div>
    <div class="pages">
      <div class="swiper-pagination-pic pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      imgsa: [
        require("../assets/banner1-1.jpg"),
        require("../assets/banner1-1.jpg"),
        require("../assets/banner1-1.jpg"),
        require("../assets/banner1-1.jpg"),
        require("../assets/banner1-1.jpg"),
        require("../assets/banner1-1.jpg")
      ]
    };
  },
  mounted() {
    new Swiper("#swiper2", {
      loop: true,
      effect: "coverflow",
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        slideShadows: false,
        stretch: 0,
        depth: 160
      },
      pagination: {
        el: ".swiper-pagination-pic"
      }
    });
  }
};
</script>
<style scoped>
/* .swiper-slide img{
    width: 100px;
    height: 100px;
} */
.banner2 {
  padding-bottom: 20px;
}

.swiper-slide {
  width: 194px;
  height: 230px;
  border: 1px solid #717171;
}
.swiper-slide img {
  width: 142px;
  height: 142px;
  margin: 14px;
}
.swiper-slide p {
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  margin: 5px;
}
.swiper-slide .ch {
  color: #fff;
  font-size: 14px;
}
.swiper-slide .en {
  color: #858585;
  font-size: 12px;
}
</style>
