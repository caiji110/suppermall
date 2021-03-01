<template>
  <div id="home">
    <nav-tab class="navtab">
      <div slot="centre">购物街</div>
    </nav-tab>
    <tabControl
      :title="title"
      ref="tabcontrol1"
     v-show="showtabcontrol"
     @tabclick = 'tabctrolclick'
     class="boxx"
    ></tabControl>
    <bscroll
      class="content"
      ref="scroll"
      @scroll="BackTop"
      :probeType="3"
      :pullUpLoad="true"
      @pullingUp="loadmore"
    >
      <HomeSwiper
        class="homeswiper"
        :banners="banners"
        @swiperimage="imageload"
      ></HomeSwiper>
      <recommend :recommends="recommends"></recommend>
      <weekpopular></weekpopular>

      <tabControl
        ref="tabcontrol2"
        class="boxx"
        :title="title"
        @tabclick = 'tabctrolclick'
      ></tabControl>
      <goodsmodule :goods="goods[$store.state.title].list"></goodsmodule>
    </bscroll>
    <backtop @click.native="gotop" v-show="showbutton"></backtop>
    <tab></tab>
    <!-- 对象的变量不能用obj[pop]获取?? -->
  </div>
</template>
<script>
import { getmultidata, getgoods } from "../../network/home.js";
import {debounce} from '../../functiontool/debounce.js'

import NavTab from "../../components/comment/navbar/Navbar.vue";
import bscroll from "../../components/comment/srcoll/scroll.vue";
import backtop from "../../components/content/backtop/backtop.vue";
import tab from '../../components/comment/tabbar/tab'

import HomeSwiper from "./childComps/HomeSwiper.vue";
import recommend from "./childComps/recommend/recommend.vue";
import weekpopular from "./childComps/weekpopular/weekpopular.vue";
import tabControl from "../../components/content/tabcontrol/tabControl";
import goodsmodule from "../../components/content/goodsitem/goodsmodule";

export default {
  name: "home",
  components: {
    tab,
    NavTab,
    HomeSwiper,
    recommend,
    weekpopular,
    tabControl,
    goodsmodule,
    bscroll,
    backtop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: {
          page: 1,
          list: [],
        },
        new: {
          page: 1,
          list: [],
        },
        sell: {
          page: 1,
          list: [],
        },
      },
      showbutton: false,
      showtabcontrol: false,
      tabOffsetTop:0,
    };
  },
  created() {
    this.getmultidatas();
    this.getgoodss("pop");
    this.getgoodss("new");
    this.getgoodss("sell");
  },
  mounted() {
    //防止拿不到
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("imgload", () => {
     // console.log('首页');
      refresh();
    });
    //因为没能在goodsmodule中只让图片加载完最后一张再发射信号，所以得在这里进行防抖
    //好像并没有效果，因为imgloadi一直被触发
   // this.tabOffsetTop = this.$refs.contentTab.$el.offsetTop;
  },
  methods: {
    getmultidatas() {
      getmultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getgoodss(type) {
      const page = this.goods[type].page;

      getgoods(type, page).then((res) => {
        this.goods[type].page = page + 1;

        this.goods[type].list.push(...res.data.list);
       
        this.$refs.scroll.finishedPullUp();
      });
    },
    gotop() {
      this.$refs.scroll.gototop(0,0);
    },
    BackTop(p) {
      if(-p>this.tabOffsetTop){
       this.showtabcontrol =true
      } else this.showtabcontrol=false
      if (-p > 1000) {
        this.showbutton = true;
      } else this.showbutton = false;
    },
    loadmore() {
      this.getgoodss(this.$store.state.title);
    },
  
    imageload() {
      this.tabOffsetTop  = this.$refs.tabcontrol2.$el.offsetTop
    },
    tabctrolclick(index,item){
      this.$refs.tabcontrol2.currentindex = index
      this.$refs.tabcontrol1.currentindex = index
    }
   },
};
</script>
<style scoped>

.boxx{
  position: relative;
  z-index: 9;
  background-color: white;
}
.navtab {
  background-color: palevioletred;
  color: white;
  font-size: 18px;
}

#home {
  height: 100vh;
  position: relative;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
