<template>
	<button class="words" @click="btnAction">{{data.name}}
	</button> 
</template>
<script type="text/javascript">
	export default{
		props:{
			data:Object
		},
		methods:{
			btnAction(){
				let value=this.data.name
				
				this.$emit('sendData', value)		
			}
		}
	}
</script>
<style>
	.words{
		display: inline-block;
		border-radius: 5px;
		font-size: 28px;
		margin-top: 25px;
		margin-right: 25px;
		border: none;
    	color: #666;
    	padding: 15px 20px;
   		background-color: #f7f7f7;
		
	}
</style>
