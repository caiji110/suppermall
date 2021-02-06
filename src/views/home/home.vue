<template>
 <div id = 'home'>
     <nav-tab  class="navtab"><div slot="centre">购物街</div></nav-tab>
 </div>
</template>
<script>
    import  NavTab from '../../components/comment/navbar/Navbar.vue'
    export default{
        name:"home",
        components: {
            NavTab,
        }
    }
</script>
<style scoped>
    .navtab{
        background-color: palevioletred;
        color: white;
    }
</style>