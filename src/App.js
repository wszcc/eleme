import { React,Component } from "react";
import  Tab  from './containers/tab/Tab'
import { HashRouter,  Route,Switch } from 'react-router-dom'
import  SelectCity  from './pages/select-city/SelectCity'
import  Login  from './pages/login/Login'
import  CitySearch  from './containers/common/city-search/CitySearch'
import  ShopList  from './containers/common/shop-list/ShopLIst'
import  ResturantDetail from './containers/common/reaturant-detail/ResturantDetail'
import  Order  from './pages/order/Order'
import  UserInfo  from './containers/common/user-info/UserInfo'
import  UserHead  from './containers/common/user-head/UserHead'
import UserScore from './containers/common/user-score/UserScore'
import ServiceCenter from './containers/common/service-center/ServiceCenter'
import CurrentService from './containers/common/current-service/CurrentService'
import DownLoad from './containers/common/download-eleme/DownLoad'
class App extends Component {
  render(){
    return (
      <div className="App">
        <HashRouter>
            {/* <Redirect to='/selectcity'></Redirect> */}
            <Switch>
            <Route exact path='/home' component={Tab}></Route>
            <Route path='/selectcity' component={SelectCity}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/citysearch/:id' component={CitySearch}></Route>
            <Route path='/shoplist/:name' component={ShopList}></Route>
            <Route path='/resturant/detail'component={ResturantDetail} ></Route>
            <Route path='/order' component={Order}></Route>
            <Route path='/userinfo' component={UserInfo}></Route>
            <Route path='/userhead' component={UserHead}></Route>
            <Route path='/userscore' component={UserScore}></Route>
            <Route path='/servicecenter' component={ServiceCenter}></Route>
            <Route path='/currentservice' component={CurrentService}></Route>
            <Route path='/download' component={DownLoad}></Route>
            </Switch>
            
        </HashRouter>
    </div>
    )
  }
}

export default App;
