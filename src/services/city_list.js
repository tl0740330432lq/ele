import axios from 'axios'
import API from '../api'

// 请求home页 品质套餐 限量抢购数据
export function getCityListData(){
return new Promise((resolve, reject)=>{
    axios.get(API.LOCATION_CITY_API).then(response=>{
      
       let data=response.data.cityList.map(item=>{
       	return {

       		idx:item.idx,
       		cities:item.cities.map(key=>{
       			return {name:key.name,pinyin:key.pinyin}
       		}),
         
       	}
       })
       
        resolve(data);     
    })
    .catch(error=>{
        console.log('请求失败');
    })
})
}