<template>
    <div id="cateshow" v-if="istrue">
     
            <div>
                <div class="cateshows">
                    <div class="showimage" v-for="(item, index) in cateshowimage" :key="index">
                        <a href="https://www.baidu.com">
                            <img :src="item.image" alt="" @load = 'loadmore'/>
                            <p>{{ item.title }}</p>
                        </a>
                    </div>
                </div>
              
            </div>
     

        <!-- 分类页面右边的上方展示数据 -->
    </div>
</template>

<script>
    //引入网络请求的函数
    import {
        subcategory
    } from "../../../network/category.js";
    import {debounce} from '../../../functiontool/debounce.js'
    
    //引入功能组件

   
    export default {
        name: "cateshow",
        props: {
            showdata: {
                type: Array,
            },
        },
        components: {
        
        },
        data() {
            return {
                istrue: false,
                cateshowimage: [],
              
            };
        },
        mounted() {
            this.$bus.$on("indexchange", () => {
                this.getshowdata(this.showdata[this.$store.state.categoryindex].maitKey);
            });
           

            //也可以放在在creat函数里，但是为了保险起见还是放在这里
            //有可能页面一创建的时候categoods等不存在

        //     setTimeout(()=>{
        //         console.log(this.$refs);
        //   console.log(this.$refs.rescroll.refresh);
        //     },400)
        //延长一定时间后打印确实可以拿到/
         
            // const refresh = debounce(this.$refs.scroll.refresh, 100);
            // this.$bus.$on("imgload", () => {
            //     console.log("分类页");
            //     refresh();
            // });
        },
        created() {
        
            //请求分类页下方的数据
            //这是页面一创建时看到的正在流行项的数据
            let b = 1;
          
            const a = setInterval(() => {
                if (b >= 0) {
                    this.getshowdata(
                        this.showdata[this.$store.state.categoryindex].maitKey
                    );
                    b--;
                    //保证只调用两次
                }
                //console.log(this.listdata);
                if (this.showdata) {
                    this.istrue = true;
                    //console.log('wo');
                }
            }, 200);

            setTimeout(() => {
                clearInterval(a);
            }, 601);
         

        },

        methods: {
            //请求分类页右上边的数据
            getshowdata(params) {
                subcategory(params).then((res) => {
                    this.cateshowimage = res.data.list;
                    //   console.log(this.cateshowimage);
                    // console.log(res);
                });
            },
           
            //请求分类页下方的数据
            loadmore(){
              this.$emit('loadimg')
                
            }
        },
    };
</script>
<style scoped>
    .showimage img {
        width: 70px;
        height: 70px;
    }

    .showimage p {
        text-align: center;
    }

    .showimage {
        margin: 10px 4px;
        width: 80px;
        height: 90px;
    }

    .cateshows {
        display: flex;
        flex-wrap: wrap;
        /* align-items: flex-start; */
    }

  
</style>