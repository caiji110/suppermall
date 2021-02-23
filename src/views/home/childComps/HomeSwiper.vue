<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load = 'swiperimageload' alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {
  Swiper,
  SwiperItem,
} from './swiper/index.js';

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      istrue:true
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperimageload(){

      if(this.istrue){
        this.$emit('swiperimage');
        this.istrue =false;
        //因为是轮播图，所以只需要计算一张图片的高度即可
      }
     
    
    }
  }
};
</script>

<style scoped></style>
