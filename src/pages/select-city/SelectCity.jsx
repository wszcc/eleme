import { React, Component,lazy,Suspense } from 'react'
import './select-city.css'
import { NavBar } from 'antd-mobile';
import { Loading } from '../../containers/loading/Loading'
import { withRouter } from 'react-router-dom'
const AllCityList = lazy(()=>import('./all-city-list/AllCityList'))
const HotCity = lazy(()=>import('./hot-city/HotCity'))
class SelectCity extends Component {
   
    handleLoginClick=()=>{
        this.props.history.push('/login')
    }
    render() {
        return (
           <Suspense fallback={<Loading></Loading>}>
                <div className="select-city-wapper">
                <NavBar
                    mode="dark"
                    leftContent="饿了么"
                    rightContent='登录 | 注册'
                    onClick={this.handleLoginClick}
                ></NavBar>
                <HotCity></HotCity>
                <AllCityList></AllCityList>
            </div>
           </Suspense>
        )
    }
}
export default withRouter(SelectCity)