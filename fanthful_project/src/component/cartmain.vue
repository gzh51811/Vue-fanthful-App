<template>
    <div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>

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