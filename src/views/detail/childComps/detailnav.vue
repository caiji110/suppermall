<template>
    <div id  =  'detailnav'>
        <detailnavtab>
            <div slot="left" class="boxleft" @click = 'goback'><img src="../../../assets/img/common/back.svg" alt=""></div>
            <div  slot="centre" class="box">
                <div v-for = '(item,index) in titles' 
                :key="index" class="boxitem" 
                :class="{detailactive:currentindex==index}"
                 @click = 'detailchange(index)'>{{item}}</div>
            </div>
         </detailnavtab>
    </div>
    
</template>

<script>
   import detailnavtab from '../../../components/comment/navbar/Navbar.vue'
    export default {
        name:'detailnav',
        components: {
            detailnavtab
        },
        data () {
            return {
                titles:['商品','参数','评论'],
                currentindex:0
            }
        },
        methods: {
            goback(){
                this.$router.go(-1)
            },
            detailchange(index){
                this.currentindex = index;
               this.$emit('current',index)
            }
        }
    }
</script>
<style scoped>
    .box{
        display: flex;
    }
  .boxitem{
    flex: 1;
 } 
 .detailactive{
     color: #ff5777;
 }
  .boxleft{
      margin-top: 5px;
  }
</style>