import React,{ Component } from 'react'
import { NavBar,Icon } from 'antd-mobile'
import './user-head.css'
import { withRouter } from 'react-router'
class UserHead extends Component{
    render(){
        return(
            <div className="user-head-wapper">
                 <NavBar
                    mode="dark"
                    leftContent={<Icon key="0" type="left" style={{ marginRight: '16px' }} />}
                    onLeftClick={() => { this.props.history.go(-1) }}
                >头像</NavBar>
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3222684675,2148904667&fm=26&gp=0.jpg" alt=""/>
            </div>
        )
    }
}
export default withRouter(UserHead)