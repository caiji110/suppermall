<template>
      <div id = 'detailswiper'>
        <Swiper>
            <SwiperItem v-for='(item,index) in topimage' :key="index">
                <img :src="item" alt="">
            </SwiperItem>
           </Swiper>
   
      </div>
        
</template>

<script>
    import { Swiper, SwiperItem} from '../../home/childComps/swiper/index.js'
    export default {
        name:"detailswiper",
         data () {
             return {
                 
             }
         },
         props:{
             topimage:{
                 type:Array
             }
         },
         components: {
            Swiper, 
            SwiperItem,
         }

    }
</script>

<style scoped>
 #hy-swiper{
     height: 300px;
     overflow: hidden;
 }
</style>