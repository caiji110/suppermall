<template>
    <div id="shopparams" v-if ='istrue'>
        <div class="shopsize">
            <table>
                <tr v-for = '(item,index) in shopparam.rule.tables[0]' :key="index">
                   <td v-for = '(data,indexs) in item' :key="indexs">{{data}}</td>
                </tr>
            </table>
            <span class="tips">{{shopparam.rule.disclaimer}}</span>
        </div>
        
     <div class="shopdata">
        <table>
            <tr v-for = "(item,index) in shopparam.info.set" :key="index">
            <td class="key">{{item.key}}</td>
            <td class="value">{{item.value}}</td>
            </tr> 
        </table>
        
     </div>
      
    </div>
</template>
<script>
 export default {
     name:"shopparams",
     data () {
         return {
             istrue:false,
         }
     },
     props: {
         shopparam:{
             type:Object
         }
     },
       created () {
           const a= setInterval(() => {
                if(this.shopparam){
                    this.istrue = true
                }
            }, 200);
            if(this.istrue){
               clearInterval(a)
            }
            //防止因为异步操作的原因无法立马传过来值
        },
 }
</script>
<style scoped>
.shopsize table{
    width: 100%;
    border-spacing: 13.66667vw 5.66667vw;
    margin-top: 20px;
    border-top: 6px solid rgba(240,240,241);
    border-bottom: 3px solid rgba(240,240,240);
 }
 .shopdata table{
     margin-top: 10px;
     width: 331px;
     
     margin-left: 12.33333vw;
     border-spacing:5px 5px;
     
 }
 .shopdata table tr{
     height: 40px;
     width: 331px;
 }
 .key{
     width: 90px;
     font-size: 16px;
 }
 .value{
     width: 240px;
     color: #eb4868;
     font-size: 16px;
 }
 .tips{
    display: inline-block;
     font-size: 12px;
     margin-left: 12.33vw;
     margin-right: 10vw;
 }
</style>