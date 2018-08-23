import axios from 'axios'
import API from '../api'
export function getHotSearchData(){
return new Promise((resolve, reject)=>{
    axios.get(API.SEARCH_HOT_API, {
        params: {
            latitude: 22.633372,
			longitude: 113.83409
        }
    })
    .then(response=>{
        var obj=[];
        var data=response.data.map(item=>{
        	
                if(item.search_word){
                  obj.push({name:item.search_word})
                }
                return obj
        	
        	
        })
     
        resolve(obj);
    })
    .catch(error=>{
        console.log('请求失败');
    })
})
}

