<template>
<div class="citiesList" >
 

    <div class="title">{{data.idx}} </div>
    <div class="cities-name" v-for="item in data.cities" v-show="show" @click='cityAction(item)'><span>{{item}}</span></div>
</div>
</template>

<script>
export default {
props:{
    data:Object
},
data(){
    return{
        show:true,
        
    }

},
methods:{
    cityAction(item){
       
        this.$emit('citiesname',item)
         
    }
}

}
</script>

<style scoped>
.citiesList .title{
    border-bottom: 1px solid #ddd;
    color: #666;
    background: #f5f5f5;
    padding: 28px 0 14px 30px;
    font-size: 28px;
}
.cities-name{
    border-bottom: 1px solid #ddd;
    margin-left:30px;
    height: 100px;
    line-height: 100px;
    box-sizing: border-box;
}
.cities-name span{
    width: 80%;
    display: inline-block;
    height: 100%;
    color:#333;
    font-size: 28px;
}
</style>