<template>
  <div class="nav">
    <div class="fl nav_classify_icon">
      <img src="../assets/home_header_nav.png">
    </div>
    <div class="logo fl">
      <img src="../assets/logo.png" alt>
    </div>
    <div class="cart">
      <img src="../assets/cart.png" alt>
    </div>
    <div class="search">
      <img src="../assets/search.png" alt>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.nav {
  height: 30px;
  padding: 7px 10px;
  background-color: #000;
  position: relative;
  border-bottom: 1px solid #262626;
}
.nav_classify_icon {
  height: 30px;
  width: 30px;
}
.nav_classify_icon img {
  width: 100%;
}
.logo {
  width: 130px;
  position: absolute;
  left: 50%;
  margin-left: -65px;
  top: 12px;
}
.logo img {
  width: 100%;
}
.search {
  height: 33px;
  width: 33px;
  float: right;
}
.search img {
  width: 100%;
}
.cart {
  height: 33px;
  width: 33px;
  float: right;
  margin-right: 2px;
  position: relative;
}
.cart img{
    width: 100%;
}
</style>

