<template>
    <div id="cart">
       <cartnav class="carnav">
           <div slot="centre">购物车</div>
       </cartnav>
       <scroll class="cartcontent" ref="scroll">
        <shoplist></shoplist>
       </scroll>
       <bottomnav ></bottomnav>
        <tab></tab>
    </div>
</template>
<script>
    import tab from'../../components/comment/tabbar/tab.vue'
    import cartnav from '../../components/comment/navbar/Navbar.vue'
    import shoplist from './childCopms/shoplist.vue'
    import scroll from '../../components/comment/srcoll/scroll.vue'
    import bottomnav from './childCopms/bottomnav.vue'
    export default {
        name:"cart",
        components: {
            tab,
            cartnav,
            shoplist,
            scroll,
            bottomnav
        },
        activated () {
           this.$refs.scroll.refresh()
        }
    }
</script>
<style scoped>
 .carnav{
     background-color: palevioletred;
     color: white;
 }
 .cartcontent{
  
     position: absolute;
     top: 44px;
     right: 0px;
     left: 0px;
     bottom: 48px;
 }
</style>