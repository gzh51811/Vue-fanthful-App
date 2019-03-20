<template>
  <div class="banner banner2">
    <div class="swiper-container" id="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner,idx) in banner2" :key="idx" @click="gotoProductDetail(banner.productId)">
          <div class="bannerImg">
            <img :src="banner.proImgUrl" >
          </div>
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
  props: ["banner2"],
  watch: {
    banner2() {
      this.$nextTick(function() {
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
      });
    }
  },
  methods: {
    gotoProductDetail(productId) {
      this.$router.push({path:'/productDetail',query:{productId}});
    }
  }
};
</script>
<style scoped>
#swiper2 {
  padding: 0 11px 20px;
}
#swiper2 .swiper-slide {
  width: 194px;
  height: 230px;
  border: 1px solid #717171;
  padding-bottom: 5px;
  margin-bottom: 5px;
}
.bannerImg {
  width: 8.93rem;
  height: 8.93rem;
  margin: 20px auto;
  margin-bottom: 0;
}
#swiper2 .swiper-slide img {
  width: 8.93rem;
  height: 8.93rem;
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
