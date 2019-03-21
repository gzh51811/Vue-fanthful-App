<template>
  <div class="nav">
    <div class="fl nav_classify_icon" @click="gotoClassify()">
      <img src="../assets/home_header_nav.png">
    </div>
    <div class="logo fl">
      <img src="../assets/logo.png" alt>
    </div>
    <div class="search fr" @click="gotoSearch()">
      <img src="../assets/search.png" alt>
    </div>
    <div class="cart fr">
      <img src="../assets/cart.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    gotoClassify(){
      this.$router.push('/classify')
    },
    gotoSearch(){
      this.$router.push('/search')
    }
  }
};
</script>
<style scoped>
.nav {
  height: 45px;
  padding: 0px 10px;
  line-height: 45px;
  background-color: #000;
  display: flex;
  border-bottom: 1px solid #262626;
}
.nav_classify_icon {
  height: 33px;
  width: 33px;
}
.nav_classify_icon img {
  width: 100%;
}
.logo {
  /* position: absolute; */
  flex: 1;
  text-align: center;
  padding-top: 3px;
}
.logo img {
  /* vertical-align: middle; */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top:14px;
  width: 130px;
}
.search {
  height: 33px;
  width: 33px;
}
.search img {
  width: 100%;
}
.cart {
  height: 33px;
  width: 33px;
  margin-right: 2px;
}
.cart img {
  width: 100%;
}
</style>

