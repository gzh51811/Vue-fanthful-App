<template>
  <div class="footer">
    <span v-for="(content,idx) in contents" :key="idx" @click="routerRedirects(idx)">
      <i :class="content.icon" :style="{color:currentIdxHighLight(idx)}"></i>
      <b :style="{color:currentIdxHighLight(idx)}">{{content.name}}</b>
    </span>
  </div>
</template>
<script>
import "../assets/iconfont/font_1092277_zjgdon691oi/iconfont.css";
export default {
  data() {
    return {
      current: 0,
      contents: [
        { icon: "iconfont icon-shangpinshengou", name: "商品" },
        { icon: "iconfont icon-icon04", name: "分类" },
        { icon: "iconfont icon-gouwuche", name: "购物车" },
        { icon: "iconfont icon-wode", name: "我的" },
        { icon: "iconfont icon-F", name: "FAN卡" }
      ],
      currentIndex: 0
    };
  },
  methods: {
    routerRedirects(idx) {
      console.log(idx);
      if (idx == 0 && this.currentIndex != idx) {
        this.$router.push("/home");
      } else if (idx == 1 && this.currentIndex != idx) {
        this.$router.push("/classify");
      } else if (idx == 3 && this.currentIndex != idx) {
        let name = localStorage["name"] || "";
        if (name) {
        } else {
          this.$router.push("/login");
        }
      }
    },
    currentIdxHighLight(idx) {
      if (idx == this.currentIndex) {
        return "#fff";
      }
    }
  }
};
</script>
<style scoped>
.footer {
  width: 100%;
  height: 50px;
}
.footer span {
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: center;
  padding-top: 5px;
}
.footer i,
.footer b {
  display: block;
  font-weight: normal;
  color: #6f6f6f;
}
.footer .iconfont::before {
  font-size: 25px;
}
.footer b {
  font-size: 12px;
}
</style>
