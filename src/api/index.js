
/*
1.定位 城市
 */

const LOCATION_CITY_API='https://shadow.elemecdn.com/lib/city-list@0.0.2/city_list.js'



 /*
 2.定位 到具体的地址
 参数：
keyword=%E5%90%8E%E7%91%9E  //输入的关键字
offset=0
limit=20 //限制显示20条地址数据
latitude=22.54286
longitude=114.059563
  */
const LOCATION_ADRESS_API='restapi/bgs/poi/search_poi_nearby_alipay'



/*
 
3.商品列表
参数：
latitude: 22.54286
longitude: 114.059563
offset=0&limit=8&
extras[]=activities&extras[]=tags&extra_filters=home&
order_by=0&activity_types[]=1&rank_id=&terminal=h5'
 */
const HOME_SHOPPING_API ='/restapi/shopping/v3/restaurants'



/*
4.HOME页 品质套餐 限量抢购 2张大图
参数 固定
latitude: 22.632904
longitude: 113.833105
templates[]: main_template
templates[]: favourable_template
templates[]: svip_template
terminal: h5
 */
 const HOME_LIMTBUYING_API='/restapi/shopping/openapi/entries?latitude=22.54286&longitude=114.059563&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5'



/*
5.跳到搜索页 热门搜索
参数：
latitude: 22.54286
longitude: 114.059563
 */
const SEARCH_HOT_API='/restapi/shopping/v3/hot_search_words'

/*
6.搜索页 点击搜索跳到商家页
参数:
kw: ads //input输入的关键字
latitude: 22.54286
longitude: 114.059563
city_id: 11 
 */
const SEARCH_SELLER_API='/restapi/shopping/v1/typeahead'


/*
7.搜索页 点击热门搜索跳到商家页
参数:其余参数基本不变
offset: 0
limit: 15
keyword: 石锅拌饭 //点击的热门搜索关键字
latitude: 22.54286
longitude: 114.059563
search_item_type: 3
is_rewrite: 1
extras[]: activities
extras[]: coupon
terminal: h5
 */
const SEARCH_SHOPPING_API='restapi/shopping/v2/restaurants/search'



export default {
	LOCATION_CITY_API,
	LOCATION_ADRESS_API,   
    HOME_SHOPPING_API,
    HOME_LIMTBUYING_API,
    SEARCH_HOT_API,
    SEARCH_SELLER_API,
    SEARCH_SHOPPING_API

}