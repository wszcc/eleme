import React,{ Component } from 'react'
import { NavBar,Icon } from 'antd-mobile'
import './user-score.css'
import { withRouter } from 'react-router'
class UserScore extends Component{
    render(){
        return(
            <div className="user-head-wapper">
                 <NavBar
                    mode="dark"
                    leftContent={<Icon key="0" type="left" style={{ marginRight: '16px' }} />}
                    onLeftClick={() => { this.props.history.go(-1) }}
                >积分商城</NavBar>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689173839,956040439&fm=26&gp=0.jpg" alt=""/>
            </div>
        )
    }
}
export default withRouter(UserScore)