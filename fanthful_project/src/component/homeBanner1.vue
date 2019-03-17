<template>
  <div class="banner1" style=" height: 129px;padding: 10px 11px 20px;background: #000;">
    <div class="swiper-container" id="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img,idx) in imgs" :key="idx">
          <img :src="img" alt>
        </div>
      </div>
      <!-- Add Pagination -->
    </div>
    <div class="pages">
      <div class="swiper-pagination pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      imgs: [
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
    new Swiper("#swiper1", {
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style >

.banner1 img {
  width: 100%;
}
/* #swiper1  */
.banner1 .swiper-pagination-bullet-active {
  width: 6px;
  height: 6px;
  border-radius: 0;
  background: #fff;
}

/* #swiper1  */
.banner1 .swiper-pagination-bullet {
  display: inline-block;
  width: 5px;
  height: 5px;
  border: 1px solid #6f6f6f;
  opacity: 1;
  border-radius: 0;
  margin-left: 6px;
}
.banner1 .pages {
  width: 100%;
  /* height: 20px; */
  position: relative;
  bottom: 2px;
}
.banner1 .pagination {
  position: absolute;
  bottom: -25px;
  right: 50%;
  transform: translateX(50%);
}
</style>


