import axios from './index'

//获取食品分类列表
export const reqFoodSort = (url,type,data)=>(axios(url,type,data))

//获取城市列表
export const reqCityList = (url,type,data)=>(axios(url,type,data))

//获取验证码
export const reqConfirmNumber = (url,type,data)=>(axios(url,type,data))

//请求城市信息
export const reqCityInfo = (url,type,data)=>(axios(url,type,data))

//请求根据城市搜索的结果
export const reqSearchReault = (url,type,data)=>(axios(url,type,data))

//获取附近参观列表
export const reqRestaurant = (url,type,data)=>(axios(url,type,data))

//发送登录请求
export const login = (url,type,data)=>(axios(url,type,data))

//请求附近商家
export const reqNearResturant = (url,type,data)=>(axios(url,type,data))

// 获取商铺列表
export const reqShopList = (url,type,data)=>(axios(url,type,data))

// 请求所有商铺分类列表
export const reqAllShopList = (url,type,data)=>(axios(url,type,data))

// 获取商家食品列表
export const reqShopFoodSortList = (url,type,data)=>(axios(url,type,data))

//获取评价分数
export const reqScoreCommnet = (url,type,data)=>(axios(url,type,data))

//获取评价分类
export const reqCategoryComment = (url,type,data)=>(axios(url,type,data))

// 获取评价信息
export const reqInfoComment = (url,type,data)=>(axios(url,type,data))

// 获取用户信息
export const reqUserInfo = (url,type,data)=>(axios(url,type,data))



