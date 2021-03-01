<template>
    <div id='category'>
       <catenav class="catenav" >
           <div slot="centre">商品分类</div>
       </catenav>
       <cateconten class="catecontent">
      
       </cateconten>
        <tab></tab>
    </div>
    
</template>
<script>


//引入公共组件
import tab from '../../components/comment/tabbar/tab'
import catenav from '../../components/comment/navbar/Navbar'
//引入自有组件
import cateconten from './childComps/catecontent'

    export default {
        name:"category",
        components: {
            tab,
            catenav,
            cateconten
        },
    }
</script>

<style scoped>
    .catenav{
        background-color: #ff8198;
        color: white;
        font-size: 20px;
    }
   .catecontent{
       position: absolute;
       top: 44px;
       left: 0;
       right: 0;
       bottom: 48px;
   }
</style>