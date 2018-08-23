<template>
<div class="location">
    <div class="header">
       <img src="../../../static/imgs/lessThan.svg" @click="backpage">
       <div class="selectDress">选择收货地址</div>
    </div>
    <div class="locationCity" @click="selectAction" v-show="isShow">
        <div class="selectCities">
            <span>{{cityName}}</span>
            <img src="../../../static/imgs/pullDown.svg">
        </div> 
        <div class="inputCity">
            <img src="../../../static/imgs/magnifier.svg">
            <input type="text" placeholder="请输入地址" />
        </div>
       
    </div>
    <div class="localcity" v-show="ishow">
        <img src="../../../static/imgs/magnifier.svg">
        <input type="text" v-model="keyword" placeholder="输入城市名、拼音或首字母查询" />
    </div>
    <div class="local-city" v-show="show">
        <p class="now-city">当前定位城市</p>
        <div class="local-city-name">{{cityName}}</div>
    </div>

    <div class="keyword" v-show="keyword">
    <ul>
    <li class="ss" v-for="item in listItem" :key="item" @click="clickAction(item)">{{item}}</li>
    <li v-show="hasNoData" class="ss">没有搜索到匹配的数据</li>
   </ul>
    </div>
    <cities-list :data="item" v-for="item in citiesListData" :key="item.idx" @citiesname="dataAction" v-show="show"></cities-list> 
</div>
</template>

<script>
import CitiesList from '../../components/citiesList/CitiesList.vue'
import {getCityListData} from '../../services/city_list.js'
export default {
 components:{
    CitiesList
 },
 data(){
    return {
        citiesListData:[],
        isShow:true,
        cityName:'',
        show:false,
        ishow:false,
        listItem:[],
        timer:null,
        keyword:''
    }
 },
 computed: {
  hasNoData() {
   return !this.listItem.length //没有搜索的条件时 显示没有搜索到数据
  }
 },
 methods:{
    dataAction(name){ 
    
        localStorage.setItem('city',name)
       this.cityName=localStorage.getItem('city')
       this.show=false
       this.isShow=true
       this.ishow=false
    },
    clickAction(item){
        localStorage.setItem('city',item)
        this.$router.go(0)
    },
    backpage(){
        this.$router.go(-1)
    },
    selectAction(){
        this.isShow=false
        this.show=true
        this.ishow=true
       

    }
},
//监听输入框 输入城市的关键字查询效果
watch: {
  keyword () {
   if (this.timer) {
    clearTimeout(this.timer)
   }
   if(!this.keyword) { //清空
    this.listItem = ""
    return
   }
   this.timer = setTimeout(() => {
        const result = [];
        
        for (let i in this.citiesListData) {
            
            this.citiesListData[i].cities.forEach((value) => { //匹配搜索的条件
                
                if (value.name.indexOf(this.keyword) > -1 ||value.pinyin.indexOf(this.keyword) > -1) {
                    result.push(value.name)
                }
            })
        
        }
        this.ishow=false
        this.show=false
        this.listItem= result
    
   },100)
  }
 },
mounted(){
    //请求数据
    getCityListData().then(data=>{
        this.citiesListData=data
        console.log(data)
        
    })
    // 部分数据存入localStorage
    this.cityName=localStorage.getItem('city')
    if(localStorage.getItem('city')){
        this.isShow=true
    }
    else if(!localStorage.getItem('city')){
        this.cityName='选择城市'
    }
   
   
    
}

}
</script>

<style scoped>
.header{
    height: 88px;
    width: 100%;   
    background-image: linear-gradient(90deg,#0af,#0085ff);
    
}
.header img{
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    left: 25px;
    top: 25px;  
    fill:#fff;
}
.header .selectDress{
    font-size: 36px;
    line-height: 88px;
    text-align: center;
    color: #fff;
}
.locationCity{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
}
.selectCities{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    padding-left: 30px;
    align-items: center;
}

.selectCities span{
    flex:1;
    font-size: 24px;
    background: #fff;
    width: 80px;
    color:#333;
    margin-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;

}
.selectCities img{
    display: block;
    width: 12px;
    height: 12px;
    background: #333;
   
}
.inputCity,.localcity{
    flex: 1;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    padding: 20px 30px;
    position: relative;
}
.inputCity img{
    display: block;
    width: 28px;
    height: 28px;
    position: absolute;
    left: 44px;
    top: 42px;
}
.inputCity input{
    flex: 1;
    outline: none;
    border: none;
    color: #999;
    height: 36px;
    width: 100%;
    padding: 18px 36px 18px 50px;
    border-radius: .266667vw;
    background: #f2f2f2;
    font-size: 26px;

}
.localcity{
     background-image: linear-gradient(90deg,#0af,#0085ff);
     position: relative;
     text-align: center;
     height: 88px;
     width: 100%;
     padding: 0 50px;

}
.localcity img{
    display: block;
    width: 28px;
    height: 28px;
    position: absolute;
    left: 74px;
    top: 30px;

}
.localcity input{
    width: 650px;
    height: 60px;
    padding: 1px 0 1px 60px;
    outline: 0;
    border: none;
    background: #fff;
    box-sizing: border-box;
    border-radius: 30px;
    margin-top: 14px;
    display: block;
    font-size: 24px;
}

.local-city{
    font-size: 28px;
}
.local-city .now-city{
    border-bottom: 1px solid #ddd;
    color: #666;
    background: #f5f5f5;
    padding: 28px 0 14px 30px;
}
.local-city .local-city-name{
    border: none;
    height: 100px;
    line-height: 100px;
    margin-left: 30px;
    color: #333;    
}
.keyword,ul{
    width: 100%;
}
.ss{
    width: 80%;
    border-bottom: 1px solid #ddd;
    height: 100px;
    margin-left: 30px;
    color:#333;
    font-size: 28px;
    line-height: 100px;
}
</style>