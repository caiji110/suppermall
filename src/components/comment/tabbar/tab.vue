<template>

      
        <TabBar>
          <TabBaritem path="/home">
            <img
          
              src="../../../assets/img/tabbar/home.svg"
              slot="item-icon"
              alt=""
            />
            <img
              src="../../../assets/img/tabbar/home_active.svg"
              slot="item-icon-active"
              alt=""
            />
            <div slot="item-text">首页</div>
          </TabBaritem>
          <TabBaritem path="/category"
            ><img
              src="../../../assets/img/tabbar/category.svg"
              slot="item-icon"
              alt=""
            />
            <img
              src="../../../assets/img/tabbar/category_active.svg"
              slot="item-icon-active"
              alt=""
            />
            <div slot="item-text">分类</div>
          </TabBaritem>
          <TabBaritem path="/shopcart"
            ><img
              src="../../../assets/img/tabbar/shopcart.svg"
              slot="item-icon"
              alt=""
            />
            <img
              src="../../../assets/img/tabbar/shopcart_active.svg"
              slot="item-icon-active"
              alt=""
            />
            <div slot="item-text">购物车</div>
          </TabBaritem>
          <TabBaritem path="/profild"
            ><img
              src="../../../assets/img/tabbar/profile.svg"
              slot="item-icon"
              alt=""
            />
            <img
              src="../../../assets/img/tabbar/profile_active.svg"
              slot="item-icon-active"
              alt=""
            />
            <div slot="item-text">我的</div>
          </TabBaritem>
        </TabBar>
     
</template>
    
<script>
     import TabBar from './TabBar.vue'
     import  TabBaritem from './itemtabbar.vue'
    export default{
        name:'tab',
        components: {
            TabBar,
            TabBaritem,
        }
    }
</script>