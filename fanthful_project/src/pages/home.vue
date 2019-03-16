<template>
  <div>
      <homeHeader></homeHeader>
      <homeBanner1></homeBanner1>
      <homeSeparator></homeSeparator>
      <div>
      <homeBanner2></homeBanner2>

      </div>

  </div>
</template>
<script>
import homeHeader from "../component/homeHeader.vue";
import homeBanner1 from "../component/homeBanner1.vue";
import homeSeparator from "../component/homeSeparator.vue";
import homeBanner2 from "../component/homeBanner2.vue";

export default {
  components: { homeHeader, homeBanner1, homeBanner2,homeSeparator }
};
</script>
<style scoped>

</style>

