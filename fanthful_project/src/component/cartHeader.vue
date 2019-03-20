<template>
    <div>
        <mt-header title="购物车" class="cartheader">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button  slot="right">编辑</mt-button>
        </mt-header>

    </div>
</template>
<script>
import { Header } from 'mint-ui';

export default {
    components:{

    }
}
</script>
<style lang="scss" scoped>
    .cartheader{
        background: #000;
        color:#fff;
    }
</style>   