<template>
    <div id="shopitem">
     <div class="select">

      <checkbutton @waschecked = 'changecheck' :value = 'isshow' class="box"></checkbutton>
     </div>
     <div class="itemimg">
         <img :src="listitem.img" alt="">
     </div>
     <div class="info">
        <div class="itemtitle">{{listitem.title}}</div>
        <div class="itemdes">{{listitem.des}}</div>
        <div class="itembottom">
          <div class="itemprice">¥{{listitem.price}}</div>
          <div class="itemcount">x{{listitem.count}}</div>
        </div>
     </div>
    </div>
</template>
<script>
    import checkbutton from './checkbutton.vue'
    export default {
        name:"shopitem",
        components: {
            checkbutton,
        },
        props: {
            listitem:{
                type:Object
            },
            itemindex:{
                type:Number
            },
            listitemchecked:{
                type:Boolean
            }
        },
        data () {
            return {
                isshow:this.listitem.checked
            }
        },
        methods: {
            changecheck(){
                //this.$bus.$emit('aaaa')
                this.$store.commit('changechecked1',this.itemindex)
                // this.listitem.checked= !this.listitem.checked
                //console.log(':'+this.listitem.checked);
                this.isshow = this.listitem.checked
            //    console.log(this.isshow);
            }
        },
        watch: {
          listitemchecked:function(newvalue){
            this.isshow = newvalue
            //一开始用v-model进行数据绑定，但是子组件不能改变prop的数据
            //只能通过赋值给自己的属性（data）然后进行操作，
            //但是又存在一个很大的问题，当prop里面的数据进行刷新时，
            //我们自己绑定的数据不能及时更新
            //所以通过watch进行观察数据是否进行刷新。
          }
        }
    }
</script>
<style scoped>
    .box{
        border-radius: 45%;
        width: 16px;
        height: 17px;
        
    }
  
    .info{
        margin-left: 20px;
        overflow: hidden;
    }
    .select{
        width: 17px;
        height: 105px;
    }
    .select img {
        width: 20px;
        height: 20px;
        
      
    }
    .itemimg img{
        width: 80px;
        height: 96px;
        margin-left: 10px;
        border-radius: 10px;
    }
    #shopitem{
        border-bottom: 1px solid rgb(172, 172, 172);
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
    }
    .itemtitle ,.itemdes{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    .itemdes{
        margin-top: 15px;
    }
    .itemprice{
        position: relative;
        top: 30px;
        left: 10px;
       color: tomato;
    }
    .itemcount{
        position: relative;
        top: 12px;
        right: -200px;
    }
</style>