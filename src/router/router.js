import {Route} from 'react-router-dom'
import {lazy} from 'react'
const  Tab = lazy(()=>import('../containers/tab/Tab'))
const  SelectCity  = lazy(()=>import ('../pages/select-city/SelectCity'))
const  Login = lazy(()=>import ('../pages/login/Login'))
const  CitySearch = lazy(()=>import ('../containers/common/city-search/CitySearch'))
const  ShopList  = lazy(()=>import ('../containers/common/shop-list/ShopLIst'))
const  ResturantDetail = lazy(()=>import ('../containers/common/reaturant-detail/ResturantDetail'))
const  Order  = lazy(()=>import ('../pages/order/Order'))
const  UserInfo  = lazy(()=>import ('../containers/common/user-info/UserInfo'))
const  UserHead  = lazy(()=>import ('../containers/common/user-head/UserHead'))
const UserScore = lazy(()=>import ('../containers/common/user-score/UserScore'))
const ServiceCenter = lazy(()=>import ('../containers/common/service-center/ServiceCenter'))
const CurrentService = lazy(()=>import ('../containers/common/current-service/CurrentService'))
const DownLoad = lazy(()=>import ('../containers/common/download-eleme/DownLoad'))

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