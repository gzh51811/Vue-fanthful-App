<template>
    <div>
        <homeSeparator :imgs="featureProducts"></homeSeparator>
        <homeBanner3 :banner3="banner3"></homeBanner3>
        <homeTwoImgBanner></homeTwoImgBanner>
    </div>
</template>
<script>
import homeSeparator from "../component/homeSeparator.vue";
import homeBanner3 from "../component/homeBanner3.vue";
import homeTwoImgBanner from "./homeTwoImgBanner.vue";

export default {
    props:['banner3'],
    data(){
        return {
             featureProducts:require('../assets/featureProducts.png')
        }
    },
    components:{homeSeparator,homeBanner3,homeTwoImgBanner}
}
</script>

