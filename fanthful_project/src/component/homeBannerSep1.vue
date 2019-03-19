<template>
    <div>
        <homeSeparator :imgs="imgs"></homeSeparator>
        <homeBanner2 :banner2="banner2"></homeBanner2>
        <homeTwoImgBanner></homeTwoImgBanner>
    </div>
</template>
<script>
import homeSeparator from "../component/homeSeparator.vue";
import homeBanner2 from "../component/homeBanner2.vue";
import homeTwoImgBanner from "./homeTwoImgBanner.vue";

export default {
    props:['banner2'],
    data(){
        return {
            imgs:require('../assets/newarrival.png')
        }
    },
    components:{homeSeparator,homeBanner2,homeTwoImgBanner}
}
</script>

