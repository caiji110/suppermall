<template>
    <div id = 'cateconten'>
   <catelist :listdata = 'listdata' class="cateleft"></catelist>
   <div class="cateright">
    <tabcontrol :title="title" ref = 'tabcon1' class="box" v-show = 'istop'></tabcontrol>
    <showscroll class="showcontent"
    ref="scroll"
    @scroll = 'goto'
    :probeType=3>   
  
       <cateshow :showdata = 'listdata' @loadimg =  'load'   ></cateshow> 
       <tabcontrol :title="title" ref = 'tabcon2' class="box"></tabcontrol>
       <gorymodule :goods="gorymodule"></gorymodule>
    </showscroll>
     <gotop @click.native = 'goback(0,0)' v-show = 'isshow'></gotop>
  
   </div> 
  
    </div>
</template>

<script>
    //引入网络请求的函数
    import {getcategory} from '../../../network/category.js'

    import {
        debounce
    } from "../../../functiontool/debounce.js";
    import {
        categorygoods
    } from "../../../network/category.js";
    //引入功能组件
    import showscroll from "../../../components/comment/srcoll/scroll.vue";
    //引入自有的组件
    import catelist from './catelist.vue'
    import cateshow from './cateshow.vue'
    import tabcontrol from "../../../components/content/tabcontrol/tabControl.vue";
    import gorymodule from "../../../components/content/goodsitem/goodsmodule.vue";
    import gotop from '../../../components/content/backtop/backtop.vue'
    export default {
        name:"catecontent",
        components: {
            catelist,
            cateshow,
            showscroll,
            tabcontrol,
            gorymodule,
            gotop
        },
        data () {
            return {
                listdata:[],
                title: ["综合", "新品", "销量"],
                miniWallkey: 10062603,
                //正在流行的数据
                gorymodule: [],
                isshow:false,
                tabtop:0,
                istop:false
                
            }
        },
        
        created () {
            this.getcatedata()
            this.getgoods(this.miniWallkey);
        },
        mounted () {
          //  console.log(this.$refs);
               const refresh = debounce(this.$refs.scroll.refresh, 200);
            this.$bus.$on("imgload", () => {
             //   console.log("分类页");
                refresh();
            });
            //这个函数还是被调用很多次。
            this.$bus.$on("categoods", (value) => {
                this.miniWallkey = value;
                console.log(this.miniWallkey);
                this.getgoods(this.miniWallkey);

                //请求分类页下方的数据
                //这是为了请求到每次点击时对应的图片信息
            });
        },
        methods: {
            getcatedata(){
                getcategory().then(res =>{
                    this.listdata = res.data.category.list
                   // console.log(this.listdata);
                })
            },
            getgoods(miniWallkey) {
                categorygoods(miniWallkey).then((res) => {
                    this.gorymodule = res;
                    //不能用push往数组里添加数据因为这样每次点击都会使该数组变大而且无法正常显示出自己想要的数据
                    //   console.log(this.gorymodule);
                   // console.log(this.gorymodule);
                });
            },
            goback(x,y){
              this.$refs.scroll.gototop(0,0)
            },
            goto(p){
                if(-p>1400){
                    this.isshow =  true
                }
                else this.isshow =false
                if(-p>this.tabtop&&!this.istop)
                {
                    this.istop = true
                   console.log('1111');
                }
                if(-p<this.tabtop){
                    this.istop = false
                }
            },
            load(){
               
               this.tabtop=this.$refs.tabcon2.$el.offsetTop
            }
        }
    }
</script>

<style scoped>
     #cateconten{
        display: flex;
    }
    .cateleft{
        flex: 1;
      
    }
    .cateright{
        flex: 3;
        
    }
    .showcontent {
        width: 264px;
        height: 100%;
    }
    .box{
        position: relative;
  z-index: 9;
  background-color: white;
    }
  
</style>