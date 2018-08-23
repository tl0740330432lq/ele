<template>
	<page id="search">
	<div class="section">
		<div class="backHome" @click="gobackHome">
			<div class="arrow"><img src="../../../static/imgs/lessThan.svg"></div>
		</div>
		<form class="searchSeller">
			<span class="magnifier"><img src="../../../static/imgs/magnifier.svg"></span>
			<input type="text" class="searchBox" placeholder="输入商家、商品名称" ref="in"/>
			<button class="searchBtn" @click="searchBtn">搜索</button>
		</form>
	</div>
		<div v-show="show" class="in-search">
			<span class="index-search">历史搜索</span>
			<button class="clear-search" @click="clearSearch" style="float: right"><img src="../../../static/imgs/clear.svg" style="width:20px;height:24px"></button>
		</div>
		<div class="search" v-show="show">
			<div class="words" v-for="item in name">{{item}}</div>
		</div>	
		<div class="in-search">
			<span class="index-search">热门搜索</span>
		</div>
		
		
		<div class="search">
			<hot-search :data='item' v-for="item in searchData" :key="item.name" @sendData="send">
		
			</hot-search>
		</div>
	</page>
</template>
<script type="text/javascript">
	import {getHotSearchData} from '../../services/search.js'
	import hotSearch from '@/components/search/Search.vue'
	export default {
		components:{
			hotSearch
		},
		data(){
			return {
				searchData:[],
				show:false,
				name:[],
				word:''
				
			}
		},
		mounted(){
			getHotSearchData().then(data=>{
				this.searchData=data
			})
		},
		methods:{
			gobackHome(){
				this.$router.go(-1)
			},
			send(val){
				this.show=true
				this.name.push(val)
				this.name=Array.from(new Set(this.name))
				
			},
			searchBtn(){
				var value=this.$refs.in.value

				if(this.name==false){
					this.show=true
					this.name.push(value)
				}
				for (var i=0;i<this.name.length;i++){
					if(this.name[i]!=value){
						this.name.push(value)
						this.name=Array.from(new Set(this.name))
					}

				}


			},
			clearSearch(){
				this.name=[]
				this.show=false
			}			
		}
	}
</script>
<style scoped>
	.section{
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
	}
	.backHome{
		margin-top: 12px;
		width: 60px;
		height: 50px;
		padding:10px 10px 10px 0;
		
	}
	.backHome .arrow{
		width: 22px;
		display: block;
		color:#999;
		height: 38px;
		font-size: 38px;
		text-align: center;
	}
	.backHome .arrow img{
		display: block;
		width: 60px;
		height: 50px;
		color: #666;
	}
	.searchSeller{
		flex-grow: 1;
		padding: 22px 22px 22px 0; 
		margin-left: 22px;
		background-color: #fff;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		position: relative;
		
	}
	.magnifier{
		position: absolute;
		left: 22px;
		top: 40px;
	}
	.magnifier img{
		display: block;
		width: 22px;
		height: 22px;
	}
	.searchBox{
		background-color: #f8f8f8;
    	padding: 13px 30px 13px 66px; 
  		border-radius: 5px;
    	font-size: 26px;
    	border: none;
    	outline: none;
   		color: #666;
   		flex-grow: 1;
	}
	.searchBtn{
		outline: none;
	    color: #333;
	    font-size: 32px;
	    border: none;
	    background: #fff;
	    font-weight: 700;
	    margin-left:22px;
	}
	.search{
		padding: 0 25px 25px;
	}
	.in-search{
		padding: 15px 25px;
	}
	.index-search{
		font-size: 32px;
		color:#666;
		font-weight: 700;
	}
	.clear-search{
		
	}
</style>