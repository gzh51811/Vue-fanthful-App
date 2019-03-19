<template>
  <div class="banner banner3">
    <div class="swiper-container" id="swiper3">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banner3" :key="banner.proEnglishName">
          <img :src="banner.proImgUrl" alt>
          <p class="ch">{{banner.proName}}</p>
          <p class="en">{{banner.proEnglishName}}</p>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="pages">
        <div class="swiper-pagination-pic pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props:['banner3'],
  watch: {
    banner3: function() {
      this.$nextTick(function() {
       new Swiper("#swiper3", {
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
  
      });
    }
  }
};
</script>
<style scoped>
/* .swiper-slide img{
    width: 100px;
    height: 100px;
} */

#swiper3 {
  padding: 0 11px 20px;
}
#swiper3  .swiper-slide {
  width: 194px;
  height: 230px;
  border: 1px solid #717171;
  padding-bottom: 5px;
  margin-bottom: 5px;
}
#swiper3  .swiper-slide img {
  width: 142px;
  height: 142px;
  margin: 8px;
  margin-bottom: 15px;
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
