<template>
  <div class="nav">
    <div class="fl nav_classify_icon">
      <img src="../assets/home_header_nav.png">
    </div>
    <div class="logo fl">
      <img src="../assets/logo.png" alt>
    </div>
    <div class="search fr">
      <img src="../assets/search.png" alt>
    </div>
    <div class="cart fr">
      <img src="../assets/cart.png" alt>
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
  /* position: relative; */
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
  vertical-align: middle;

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

