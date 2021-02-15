<template>
    <div id =  'tabControl'>
       <div class="tabControlitem" v-for='(item,index) in  title' :key="index" :class='{active:currentindex==index}'
        @click = 'change(index,item)'
       >
          <span>{{item}}</span> </div>
    </div>
</template>
<script>
    export default {
        name:"tabControl",
        props: {
            title:{
                type:Array,
                default(){
                    return[]
                }
            }
        },
        created () {
            console.log('我被创建了');
        },
        data () {
            return {
                currentindex:0
            }
        },
        methods: {
            change(index,item){
                this.currentindex = index;
                if(item=='流行') item='pop'
                if(item=='新款') item='new'
                if(item=='精选') item='sell'
                this.$store.commit({
                    type:"change",
                    title:item
                })
              console.log('我被点击了');
            }
        }
    }
</script>

<style scoped>
    #tabControl{
        margin-top: 10px;
        display: flex;
        text-align: center;
    }
    .tabControlitem{
        flex: 1;
        
    }
    .active{
        color: #ff8198;
      
    }
    .active span{
        border-bottom: 3px solid #ff8198;
        padding-bottom: 5px;
    }
</style>