<template>
    <div id= 'catelist' v-if = 'isshow' >
   <catescroll class="content">
    <div>
        <ul>
            <li class="catelistli"
                @click='selectgory(index)' 
                v-for = '(item,index) in listdata' 
                :key='index'
                :class = "{active:currentindex==index}">
                {{item.title}}
            </li>
        </ul>
    </div>
   </catescroll>
      
     
    </div>
</template>

<script>
    import catescroll from '../../../components/comment/srcoll/scroll.vue'
    export default {
        name:"catelist",
        props: {
            listdata:{
                type:Array,
                default(){
                    return []
                }
            },
           
        },
        components: {
            catescroll,
        },
        data () {
            return {
                isshow:false,
                currentindex:0,
            }
        },
        created () {
          const a = setInterval(() => {
              //console.log(this.listdata);
                if(this.listdata){
                this.isshow = true
               //console.log('wo');
             
           }
            }, 200);
            setTimeout(() => {
                clearInterval(a)
            }, 601);
            // if(this.isshow){
            //     console.log(this.listdata);
            //     clearInterval(a)
            //      //这种判断是无效的因为只有在页面一创建的时候判读一次之后就不判断了。。。
            //      //所以只能设置倒计时去取消了。存在bug当数据在0.6秒后再返回来就接收不到了
            // }
         },   
         methods: {
            selectgory(index){
             this.currentindex = index;
             this.$store.commit({
                 type:'changecateindex',
                 index:index
             });
             this.$bus.$emit('indexchange')
             //其实在这里可以顺便传递index的值，这样就不用vuex去记录了。
             //这个是为了得到左边点击的index去请求右边图片
             //this.$bus.$emit('categoods','aaa')
             this.$bus.$emit('categoods',this.listdata[index].miniWallkey)
            }
         }  
           
        
    }
</script>
<style scoped>
    .catelistli{
       height: 44px;
       text-align: center;
       line-height: 44px;

    }
    .active{
        border-left: 4px solid #ff5777;
        color: #ff8198;
    }
    .content{
      height: 100%;
      width: 100px;

    }
</style>