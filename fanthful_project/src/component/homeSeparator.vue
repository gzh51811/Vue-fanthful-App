<template>
  <div class="separator">
    <div class="new_arrival">
      <span>
        <img src="../assets/fengge.png">
      </span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.separator {
  height: 19px;
  margin: 10px 0;
  position: relative;
}
.new_arrival {
  height: 2px;
  position: relative;
  top: 9px;
  background: #bd1920;
}
.new_arrival span img {
  background: #000;
  position: absolute;
  left: 50%;
  margin-top: -7px;
  transform: translateX(-50%);
  height: 14px;
}
</style>
