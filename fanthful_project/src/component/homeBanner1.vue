<template>
  <div class="banner banner1">
    <div class="swiper-container" id="swiper1">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(banner,idx) in banner1"
          :key="idx"
          @click="gotoGodsList(banner.twoName)"
        >
          <img :src="banner.bannerImg">
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
  watch: {
    banner1: function() {
      this.$nextTick(function() {
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
      });
    }
  },
  props: ["banner1"],
  methods: {
    async gotoGodsList(name) {
      this.$store.commit("changeGoodsListName", {name});
      this.$router.push("/godsList?gotoGoodslist=true");
    }
  }
};
</script>
<style >
.banner1 {
  height: 129px;
  padding: 10px 11px 27px;
}
.banner img {
  width: 100%;
}
/* #swiper1  */
.banner .swiper-pagination-bullet-active {
  width: 6px;
  height: 6px;
  border-radius: 0;
  background: #fff;
}

/* #swiper1  */
.banner .swiper-pagination-bullet {
  display: inline-block;
  width: 5px;
  height: 5px;
  border: 1px solid #6f6f6f;
  opacity: 1;
  border-radius: 0;
  margin-left: 6px;
}
.banner .pages {
  width: 100%;
  /* height: 20px; */
  position: relative;
  bottom: 2px;
}
.banner .pagination {
  position: absolute;
  bottom: -25px;
  right: 50%;
  transform: translateX(50%);
}
</style>


