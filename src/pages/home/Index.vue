<template>
	<page id="home">
	<!-- 头部 -->
		<div class="header">
			<div class="header-dress" @click="goCities()">
				<img src="../../../static/imgs/location.svg" style="width: 26px;height: 31px;display:inline-block">
				<span class="home-location">{{getcity}}</span>
				<img src="../../../static/imgs/pullDown.svg" style="width: 14px;height: 14px;display:inline-block">
			</div>
		</div>
		<!-- 搜索框 -->
		<div class="home-search" @click="goSearch" :class="searchBarFixed==true?'isFixed':''">
			<div class="button">
				<a class="content">
					<img src="../../../static/imgs/magnifier.svg">
					<span>搜索饿了么商家、商品名称</span>
				</a>
			</div>
		</div>
		<!-- 轮播 -->
		<div class="swiper-container">
    		<div class="swiper-wrapper">
        		<div class="swiper-slide">
            		<ul>
            			<li>
            			<div><img src="//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            			<span class="title">美食</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">商超便利</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">水果</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/1/48/bf1a859bf81553bbcfd6cf4ac42cbjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">早餐</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">医药健康</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">大牌五折</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">浪漫鲜花</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">厨房生鲜</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">跑腿代购</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">披萨意面</span>
            			</li>
            		</ul>
        		</div>
        		<div class="swiper-slide">
            		<ul>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">地方小吃</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">麻辣烫</span>
            			</li>
            			<li>
            				<div><img src="//fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></div>
            				<span class="title">地方菜系</span>
            			</li>
            		</ul>
        		</div>
    		</div>
    		<div class="swiper-pagination"></div>
		</div>
		<limt-buying :data='item' v-for="item in limitData" :key="item.name">
			
		</limt-buying>
		<div class="shoplist-title">
		 
		推荐商家
		
		</div>
		<limt-buying :data='item' v-for="item in limitData" :key="item.name">
			
		</limt-buying>
		<limt-buying :data='item' v-for="item in limitData" :key="item.name">
			
		</limt-buying>
		<limt-buying :data='item' v-for="item in limitData" :key="item.name">
			
		</limt-buying>
		<limt-buying :data='item' v-for="item in limitData" :key="item.name">
			
		</limt-buying>
		<div class="footer">
			
				<a href=""><span>首页</span></a>
				<a href=""><span>发现</span></a>
				<a href=""><span>订单</span></a>
				<a href=""><span>我的</span></a>
			
		</div>
	</page>
</template>
<script type="text/javascript">
window.onload = function() {
	var mySwiper = new Swiper ('.swiper-container', {  
    	 
    // 如果需要分页器
    	pagination: '.swiper-pagination'
	}) 
	
	
}
import {getListBuyingData} from '../../services/limitService.js'
import limtBuying from '../../components/home/LimitBuying.vue'
import {getCityListData} from '../../services/city_list.js'
export default{
	components:{
		limtBuying
	},
	data(){
		return{
			limitData:[],
			searchBarFixed:false,
			getcity:'未能获取地址'
		}
	},
	mounted(){
		getListBuyingData().then(data=>{
     
            this.limitData=data
            
        })
        getCityListData().then(data=>{
        	console.log(data)
        })
       
       if(localStorage.getItem('city')){
       		this.getcity=localStorage.getItem('city')
       }
      
	},
	methods:{
		goSearch(){
			this.$router.push('/search')		
		},
		// handleScroll () {
  // 		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  			
  // 			if(scrollTop>70){
  // 				this.searchBarFixed = true
  // 			}
  // 			else{
		// 		this.searchBarFixed = false
		//  	}
		// },
		goCities(){
			this.$router.push({path:'/location'})
		}

	}
}	
</script>
<style type="text/css">
	.header{
		
		padding: 20px 28px 0; 
		background: #0085ff;
			
	}
	.header .header-dress{
		text-align: center;
		width: 60%;	
		display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			align-items: center;
			height: 69px;
	}
	.header .home-location{
		font-size: 34px;
		display: inline-block;
	    max-width: 80%;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    font-weight: 700;
	    color: #fff;
	    margin: 0 10px;
	}
	.home-search{
		width: 100%;
		margin-top: -2px;
		height: 102px;
		background:#0085ff;
		position:sticky;
		top:0px;
		z-index: 100;

	}
	/*.isFixed{
		
		 width: 100%;
	
		
	}*/
	.home-search .button{
		padding: 15px 28px ;
		

		line-height: 72px;
		
		
	}
	.home-search .button a{
		background: #fff;
		width: 100%;
		text-align: center;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		height: 9.6vw;
		align-items: center;
		justify-content: center;
		
	}
	.home-search .button a span{
		font-size: 28px;
		text-align: center;
		font-family: simsun;
		color:#999;
		
		
	}
	.home-search .button a img{
		display: inline-block;
		width: 32px;
		height: 32px;
		
	}
	.swiper-container {
	    width: 100%;
	    height: 354px;
	    
	} 
	.swiper-slide ul{
		width: 100%;
		height: 100%;
	}
	.swiper-slide ul li{
		float: left;
		width: 20%;
		height:128px ;
		display: table-cell;
		vertical-align:middle;
		margin-top: 22px;
		text-align: center;
		
	}
	.swiper-slide ul li div{
		width:  90px;
		height: 90px;
		position: relative;
		display: inline-block;
	}
	.swiper-slide ul li img{
		width: 90px;
		height: 90px;
		vertical-align: top;		
	}
	.swiper-slide ul li span.title{
		display: block;
		font-size: 24px;
		color: #666;
		margin-top: 10px;
	}
	.shoplist-title{
		height: 72px;
		width: 100%;
		color: #000;
		font-size: 30px;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
	}
	.shoplist-title:before{
		display: block;
		content: "";
		width: 40px;
		height: 2px;
		background: #999;
		margin-right: 26px;
	}
	.shoplist-title:after{
		display: block;
		content: "";
		width: 40px;
		height: 2px;
		background: #999;
		margin-left: 26px;
	}
	.footer{
		width: 100%;
		height: 120px;
		position: fixed;
		background: #fff;
		left: 0;
		bottom: 0px;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
	}
	.footer a{
		flex:1;
		padding-top: 9px;
		display: flex;
		height: 100px;
		box-sizing: border-box; 
	}
	.footer a span {
		display: block;
    	color: #8e8e93;
		flex: 1;
		width: 25%;
		font-size: 30px;
		background: #fff;
		text-align: center;
		box-sizing: border-box; 
	}
</style>