<template>
    <div class="proDetailFooter">
        <div class="gotoCart">
            <i class="iconfont icon-gouwuche"></i>
            <span>0</span>
        </div>
        <div class="addCart">加入购物车</div>
        <div class="buyNow">立即购买</div>
    </div>
</template>
<script>
import "../assets/iconfont/font_1092277_zjgdon691oi/iconfont.css";
export default {
    
}
</script>
<style scoped>
.proDetailFooter{
    width: 100%;
    display: flex;
    height: 50px;
    border-top: 1px solid #575757;
}
.gotoCart{
    flex: 1;
    text-align: center;
    position: relative;
}
.gotoCart i{
    color:#EDD49D;
    font-size: 37px;
}
.gotoCart span{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #000;
    color:#9A623A;
    text-align: center;
    line-height: 20px;
    background: #EBD49D;
    position: absolute;
    left: 50%;
    bottom: 50%;
}
.addCart,.buyNow{
    font-size: 20px;
     flex: 1;
     text-align: center;
     line-height: 50px;
}

.addCart{
    background: #EED391;
    color:#9B6239;
}
.buyNow{
    background:red;
    color:#fff;
}
</style>
