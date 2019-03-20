<template>
    <div class="content">
        <img src="../assets/break.png" class="return">
        <input type="search" class="search" placeholder="搜索、游戏、电影、动漫周边"> 
        <img src="../assets/cart.png" class="cart">
    </div> 
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .content{
        width:100%;   
        background:#000;
        height:44px;
        position: relative;
    }
    img{
        height: 33px;
        padding-top:5px;
    }
    .cart{
        position: absolute;
        right: 10px;
    }
    .search{
        width: 258px;
        height: 25px;
        margin:6px 0 0 20px ;
    }
    


</style>

