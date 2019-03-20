<template>
    <div>
        <ul class="aside">
            <li v-for="(item,index) in aside" :key="index" @click="changeType(item.className)" :class="{active:item.className==type?true:false}">{{item.className}}</li>
        </ul>
        <div class="main">
            <ul>
                <li>
                    <img :src="aside.length>0?aside[index].appImg:''"/> 
                </li>
                <li v-for="(item,index) in icon" :key="index">
                    <img :src="item.url" />     
                </li>  
            </ul>
        </div>      
    </div>  
</template>

<script>
export default {
    data(){
        return {
            aside:[],
            icon:[],
            type:"Game",
            index:0,
        }
    },
    computeds:{
        
    },
    mounted(){
        this.init()
      
    },
    methods:{
       async init(){
            let data1 = await this.$axios.get('/aside');
            this.aside = data1.data.data.aside;
            this.changeIcon()
            this.changeIndex()
        },
        changeIndex(){
            for(var a=0;a<this.aside.length;a++){
                if(this.aside[a].className==this.type){
                    this.index = a
                }
            }
        },
        changeType(type){
            this.type = type;
            this.changeIcon()
            this.changeIndex()
        },
        async changeIcon(){
            let data2 = await this.$axios.get('/icon?type='+this.type);
            this.icon = data2.data.data.icon;
        }

    }
}
</script>
<style scoped lang="scss">
    .aside{
        position: fixed;
        top:44px;
        left:0;
        float:left;
        width:94px;
        background: #fff;
        .active{
            text-decoration: underline;
        }
        li{
            height: 48px;
            line-height: 48px;
            text-align:center;
            color:#3e3e3e;
            
        }
    }
    .main{
        background:#fff;  
        position: relative;
        top:44px;
        left:94px;
        display:inline-block;
        // width: 280px;
        // border:3px;
        ul li:nth-child(1){
                width: 265px;
            } 
        ul li:nth-child(1) img{
                width: 265px;
                height: 86px;
                margin:0;
            } 
        ul{
            width: 280px;   
            li{
                float:left;
                width: 125px;
                height: 86px;
                margin:7px;
                background:#f7f7f7;  
            }
            img{
                margin:7px 0 0 8px;
                width: 110px;
                height: 70px;
            }
        }  
        
    }

</style>

