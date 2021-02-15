<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
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
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped></style>
