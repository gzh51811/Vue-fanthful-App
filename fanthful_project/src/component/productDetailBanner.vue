<template>
  <div class="product_banner">
    <div class="swiper-container" id="swiper4">
      <div class="swiper-wrapper">
        <div class="swiper-slide"  :key="idx">
          <img :src="bannerImg" alt>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination-detail pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props:['bannerImg'],
  mounted() {
    new Swiper("#swiper4", {
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination-detail"
      }
    });
  }
};
</script>
<style >

.product_banner .swiper-slide{
    line-height: 375px;

}
.product_banner .swiper-slide img{
    width: 100%;
}
.swiper-pagination-detail{
    position: absolute;
    z-index: 2;
}
.product_banner .swiper-pagination-bullet-active {
  width: 6px;
  height: 6px;
  border-radius: 0;
  background: #fff;
}

.product_banner .swiper-pagination-bullet {
  display: inline-block;
  width: 5px;
  height: 5px;
  border: 1px solid #6f6f6f;
  opacity: 1;
  border-radius: 0;
  margin-left: 6px;
}
</style>

