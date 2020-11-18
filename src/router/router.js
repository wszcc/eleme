import {  Route} from 'react-router-dom'
import  Tab  from '../containers/tab/Tab'
import  SelectCity  from '../pages/select-city/SelectCity'
import  Login  from '../pages/login/Login'
import  CitySearch  from '../containers/common/city-search/CitySearch'
import  ShopList  from '../containers/common/shop-list/ShopLIst'
import  ResturantDetail from '../containers/common/reaturant-detail/ResturantDetail'
import  Order  from '../pages/order/Order'
import  UserInfo  from '../containers/common/user-info/UserInfo'
import  UserHead  from '../containers/common/user-head/UserHead'
import UserScore from '../containers/common/user-score/UserScore'
import ServiceCenter from '../containers/common/service-center/ServiceCenter'
import CurrentService from '../containers/common/current-service/CurrentService'
import DownLoad from '../containers/common/download-eleme/DownLoad'

const Routes=[
    {path:'/home',component:Tab},
    {path:'/selectcity',component:SelectCity},
    {path:'/login',component:Login},
    {path:'/citysearch/:id',component:CitySearch},
    {path:'/shoplist/:name',component:ShopList},
    {path:'/resturant/detail',component:ResturantDetail},
    {path:'/order',component:Order},
    {path:'/userinfo',component:UserInfo},
    {path:'/userhead',component:UserHead},
    {path:'/userscore',component:UserScore},
    {path:'/servicecenter',component:ServiceCenter},
    {path:'/currentservice',component:CurrentService},
    {path:'/download',component:DownLoad},
]

export default Routes.map(({path,component},index)=>(
    <Route key={index} path={path} component={component}></Route>
))