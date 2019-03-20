<template>
    <div>
        <div  class="nav" >
        <div class="close"><i class="el-icon-arrow-left" @click="back"></i> 
        </div>
        <div class="input"> 
        <form action=""> 
        <input type="text" placeholder="游戏、电影、动漫"  ref='input' class="my_search_input ">
        </form>
        </div>
        <div class="search">
        <i class=""></i>
        </div>
      </div>
    
    </div>
</template>
<script>
export default {
	data() {
		return {};
	},
	methods: {
		back() {
            //点击返回图标，返回搜索页
		this.$router.push('/search')
		},
        
	},
};
</script>
<style scoped>
html body{
    background: white;
}
.nav{
    background: black;
    width:100%;
    position: relative
}
.close{
    color:white;
    font-size:20px;
    padding: 12px 14px;
    position: absolute;
    z-index: 999;
    left: 0;
}
.search{
    color:white;
    text-align: center;
    line-height: 44px;
    font-size:20px;
    width: 40px;
    height: 40px;
    padding: 2px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 999;
}
.input{
    border-radius: 2px;
    height: 33px;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    letter-spacing: 0;
    position: relative;
    padding: 6px 50px;  
}
.input form{
position: relative;
}
.my_search_input {
    outline: none;
    width: 100%;
    padding: 7px 12px;
    height: 32px;
    background: #fff;
    border: none;
    border-radius: 2px;
    -webkit-appearance: none;
    line-height: 32px;
    font-size: 14px;
    position: relative;
    box-sizing: border-box
}

</style>
