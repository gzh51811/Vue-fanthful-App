<template>
    <div>
        cart
        <cartHeader/>
        <cartmain/>
    </div> 
</template>
<script>
import cartHeader from "../component/cartHeader.vue";
import cartmain from "../component/cartmain.vue"

export default {
    components:{
        cartHeader,
        cartmain
    }
}
</script>
<style lang="scss" scoped>

</style>