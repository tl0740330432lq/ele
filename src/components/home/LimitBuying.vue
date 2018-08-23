<template>
<div class="limit">
	<div class="limit-l">
		<h1 class="h1">品质套餐</h1>
		<div class="description">搭配齐全吃得好</div>
		<div class="buyNow">立即抢购 ></div>
		<img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/">
	</div>
	<div class="limit-l limit-r">
		<h1 class="h1">{{data.title}}</h1>
		<div class="description">{{data.description}}</div>
		<div class="buyNow">{{data.population}}<span>正在抢 ></span></div>
		<img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/">
	</div>
</div>


	
</template>
<script type="text/javascript">
	export default{
		props:{
			data:Object
		}
		
	}
</script>
<style scoped>
	.limit{
		margin:0 20px 16px;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
	}
	.limit-l{

		flex:1;
		padding: 24px 0px 0 30px;
		margin-right: 6px;
		position: relative;
		height: 280px;
		box-sizing: border-box;
		background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
	}
	.limit-r {
		padding: 24px 0 0 30px;
		margin-right:0;
	}
	.limit-r .h1{
		color: #e81919;
	}
	.h1{
		font-size: 34px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	.description{
		font-size: 26px;
		color: #777;
		margin-bottom: 18px;
	}
	.buyNow{
		color: #af8260;
    	font-weight: 700;
    	font-size: 24px;
	}
	.buyNow span{
		color:#333;
    	font-weight: 700;
    	font-size: 24px;
	}
	.limit-l img{
		position: absolute;
		bottom: -15px;
		right: 0;
	}
</style>