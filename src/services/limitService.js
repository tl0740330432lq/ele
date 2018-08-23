import axios from 'axios'
import API from '../api'

// 请求home页 品质套餐 限量抢购数据
export function getListBuyingData(){
return new Promise((resolve, reject)=>{
    axios.get(API.HOME_LIMTBUYING_API).then(response=>{
        let data=response.data[1].entries.map(item=>{
        	let popula=item.more.substring(item.more.length-4,item.more.length-1)
        	return {
        		title:item.name,
        		description:item.description,
        		population:popula
        		
        	}

        })
        
        
        resolve(data);     
    })
    .catch(error=>{
        console.log('请求失败');
    })
})
}