<template>
  <div id="app">
    <keep-alive include="">
      <router-view ></router-view>
    </keep-alive>
    
   <tab></tab>
  
  </div>
</template>

<script>
 import tab from './components/comment/tabbar/tab.vue'
 
export default {
  name: "App",
  components: {
   tab ,
  },
};
</script>


<style>
  @import "./assets/css/base.css";
</style>
