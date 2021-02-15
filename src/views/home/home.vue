<template>
    <div id="home">
      <nav-tab class="navtab"><div slot="centre">购物街</div></nav-tab>
      <bscroll class="content" ref="scroll" @scroll = 'BackTop' :probeType=3>
        <HomeSwiper class="homeswiper" :banners="banners"></HomeSwiper>
        <recommend :recommends="recommends"></recommend>
        <weekpopular></weekpopular>

        <tabControl :title='title'></tabControl>
        <goodsmodule :goods = 'goods[$store.state.title].list'></goodsmodule>
        <ul>
          
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </bscroll>
      <backtop @click.native = 'gotop' v-show='showbutton'></backtop>
      <!-- 对象的变量不能用obj[pop]获取?? -->
    </div>
  </template>
  <script>
  import { getmultidata, getgoods } from "../../network/home.js";
  
  import NavTab from "../../components/comment/navbar/Navbar.vue";
  import bscroll from '../../components/comment/srcoll/scroll.vue';
  import backtop from '../../components/content/backtop/backtop.vue'
  
  import HomeSwiper from "./childComps/HomeSwiper.vue";
  import recommend from "./childComps/recommend/recommend.vue";
  import weekpopular from "./childComps/weekpopular/weekpopular.vue";
  import tabControl from '../../components/content/tabcontrol/tabControl';
  import goodsmodule from '../../components/content/goodsitem/goodsmodule'
  
  export default {
    name: "home",
    components: {
      NavTab,
      HomeSwiper,
       recommend,
       weekpopular,
       tabControl,
       goodsmodule,
      bscroll,
      backtop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        title:['流行','新款','精选'],
        goods: {
          "pop": { page: 1, list: [] },
         "new": { page: 1, list: [] },
          "sell": { page: 1, list: [] },
        },
        showbutton:false,
      };
    },
    created() {
      this.getmultidatas();
      this.getgoodss('pop')
      this.getgoodss('new')
      this.getgoodss('sell')
    
      
    },
    methods: {
      getmultidatas() {
        getmultidata().then((res) => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getgoodss(type) {
         const page = this.goods[type].page
        getgoods(type, page).then((res) => {
          this.goods[type].page = page+1;
          this.goods[type].list.push(...res.data.list)
        });
      },
      gotop(){
            this.$refs.scroll.gototop()
      },
      BackTop(p){
         if(-p>1000){
           this.showbutton = true;
           
         }
         else this.showbutton = false
      }
    },
  };
  </script>
  <style scoped>
  .navtab {
    background-color: palevioletred;
    color: white;
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    z-index: 9;
  }
  
  #home{
   height: 100vh;
   position: relative;
  }
  .content{
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
  
  }
  </style>
  