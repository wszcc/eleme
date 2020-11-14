import { React, Component } from 'react'
import './select-city.css'
import { NavBar } from 'antd-mobile';
import  HotCity  from './hot-city/HotCity'
import  {AllCityList}  from './all-city-list/AllCityList'
import { withRouter } from 'react-router-dom'


class SelectCity extends Component {
    handleLoginClick=()=>{
        this.props.history.push('/login')
    }
    render() {
        return (
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
        )
    }
}
export default withRouter(SelectCity)