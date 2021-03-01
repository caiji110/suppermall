<template>
    <div class="goods-item" @click = 'detailclick'>
        
             <img :src='dataimg'  @load= 'imgload' alt="">
         <div class="goods-info">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
          </div>
    </div>
</template>
<script>
    export default {
        name:"goodsitem",
        props: {
            goodsitem:{
                type:Object
            },
            goodslength:{
              type:Number
            }
        },
      
       data () {
         return {
          count:0,
          dataimg:String
         }
       },
       created () {

      //  console.log(this.goodsitem);
        //if(this.goodsitem.show.img)
        //为什么加个img就报错。
         if(this.goodsitem.show)
         {
            this.dataimg = this.goodsitem.show.img
         }
         else
          this. dataimg =this.goodsitem.img

       //这一部分代码是为了解决我传数据的时候没能传好，
       //在两地方应用了该组件但是传进来的图片路径却不一样
       //his.goodsitem.show.img
       //this.goodsitem.img
       },
        methods: {
            imgload(){
            //错误示范，每个item只对应一张图片，
            //即在同个选项卡count最大只能等于一
            //多少张图片就创建多少个item页面，count都会重新归0
            //应该在module监听图片是否加载完毕
              // if(this.count === this.goodslength)
              // {
                this.$bus.$emit('imgload')
                
              // }
            },
            detailclick(){
           this.$router.push({
            path:"/detail",
            query:{iid:this.goodsitem.iid}
           })
         }
        },
      
     
        
    }
</script>
<style scoped>
   .goods-item {
    padding-bottom: 40px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
   
  }
</style>