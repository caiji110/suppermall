<template>
  <div id="app">
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
  @import './assets/css/base.css'
</style>