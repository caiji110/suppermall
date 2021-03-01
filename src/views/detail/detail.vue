<template>
  <div id="detail">
    <detailnav @current = 'navindex' @click.native='indexs'></detailnav>
    <detailscroll 
    class="detailcontent"
    ref="scroll"
    @scroll = 'isshow'
    :probeType=3
    >
      <detailswiper :topimage = 'topimage'></detailswiper>
      <goods :goodsdetails = 'goodsdetails'></goods>
      <shopInfo :shopinfo = 'shopinfo'></shopInfo>
      <imageshow :imageshow = 'topimage' @showload='load'></imageshow>
      <shopparams :shopparam='shopparam' ref="shopparams"></shopparams>
      <usecommend :userdata = 'usercommend' ref = 'user'></usecommend>
     
    <ul>
     
      <LI></LI>
      <LI></LI>
      <LI></LI>
    </ul>
     
    </detailscroll>
    <backtop @click.native = 'gotop(0,0)' v-show = 'istrue'></backtop>
         
          <detailbottom @addToCart = 'addcart'></detailbottom>
  </div>
</template>
<script>
//网络请求函数的引入
import { getdetail } from "../../network/detail.js";

//组件的引入
import detailnav from './childComps/detailnav'
import goods from './childComps/goodsdetails'
import shopInfo from './childComps/shopinfo'
import shopdetail from './childComps/shopdetail'
import imageshow from './childComps/imageshow'
import shopparams from './childComps/shopraram'
import usecommend from './childComps/usecommend'
import detailbottom from './childComps/detalbottombar'

//功能组件的引用
import detailscroll from '../../components/comment/srcoll/scroll'
import detailswiper from './childComps/detailswiper'
import backtop from '../../components/content/backtop/backtop'
import tab from '../../components/comment/tabbar/tab'

export default {
  name: "detail",
  components: {
    detailnav,
    detailswiper,
    goods,
    shopInfo,
    detailscroll,
   
    imageshow,
    shopparams,
    usecommend,
    backtop,
    detailbottom
  },
  data() {
    return {
      iid: null,
      istrue:false,
      shopsizeofftop:0,
      index:0,
      topimage: [],
      goodsdetails:{},
      shopinfo:{},
      shopdetil:{},
      shopparam:{},
      usercommend:[]
    };
  },
  created() {
    this.iid = this.$route.query.iid;
    this.getdata(this.iid);
   //  console.log(this.iid);
  },
  mounted () {
     const refresh = this.debounce(this.$refs.scroll.refresh(),100)
    //console.log(this.$refs);
  },
  methods: {
    getdata(iid) {
      getdetail(iid).then((res) => {
        //获取图片
        this.topimage.push(...res.result.itemInfo.topImages) 
        //获取商品的描述信息
        this.goodsdetails = res.result
        //goodsdetails页面没能没能第一时间收到数据的原因可能是因为这步赋值操作是异步操作
        //在进行赋值时传参可能已经完成，所以传过去的是一个空对象。
     //  console.log(res.result);
        //获取商家信息进行展示
        this.shopinfo = res.result.shopInfo
        //获取商品参数进行展示
        this.shopparam = res.result.itemParams
        //获取用户评论
        this.usercommend = res.result.rate.list
      });
    //  console.log(this.goodsdetails);
      //打印这句话的时候赋值操作还没有完成,所以值为空

    },
    //向购物车添加商品
    addcart(){
          const product = {}
          product.iid = this.goodsdetails.itemInfo.iid,
          
          product.price = this.goodsdetails.itemInfo.lowPrice,
          product.img = this.topimage[0],
          product.des = this.goodsdetails.itemInfo.desc,
          product.title = this.goodsdetails.itemInfo.title
          product.checked = true
         this.$store.commit('addcart', product)
    },
    gotop(x,y){
      this.$refs.scroll.gototop(x,y)
    },
    isshow(p){
     //3360
      
      if(-p>1213){
        this.istrue = true
      }
      else this.istrue =false
    },
    navindex(a){
      this.index= a;
    },
    indexs(){
      if(this.index==1){
        this.gotop(0,-this.$refs.shopparams.$el.offsetTop);
       
        //不能直接用3360的数据，因为不同页面的内容大小可能不一样
        //所以要计算距离顶部的高度
        //图片的加载对高度有影响，所以得先把图片加载完才可以
      }
      if(this.index==0){
        this.gotop(0,0)
      }
      if(this.index == 2){
        this.gotop(0,-this.$refs.user.$el.offsetTop);
      }
    },
    load(){
      
      this.debounce(this.$refs.scroll.refresh,100);
    
    }, 
     debounce(fn, wait) {
      let timer = null;
      return function() {
        let context = this;
        let args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(context, args);
        }, wait);
      };
    },

  },
};
</script>
<style scoped>
  #detail{
    position: relative;
    z-index: 9;
  /* //  background-color: white; */
    height: 100vh;
    /* 加背景颜色可以盖掉其他组件，没加背景颜色则是透明的 */
  }
  .detailcontent{
    position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  }
  
</style>
