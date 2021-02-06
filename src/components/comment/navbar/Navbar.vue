<template>
    <div class="nav-bar">
        <div class="left"><slot  name='left'></slot></div>
        <div class="centre"><slot name="centre"></slot></div>
        <div class="right"><slot name = "right"></slot></div>
    </div>
</template>

<script>
    export default{
        name:'NavBar',
    } 
</script>
<style scoped>
    
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .left{
        width: 60px;  
        height: 44px;
       
    }
    .right{
        width: 60px;  
        height: 44px;
        
    }
    .centre{
        flex: 1;
        
    }
</style>