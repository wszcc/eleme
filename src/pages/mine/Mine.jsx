import { React,Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './mine.css'
import { connect } from 'react-redux'
import  { withRouter } from 'react-router'
class Mine extends Component{
    render(){
        return (
            <div className="mine-wapper">
                 <NavBar
                    mode="dark"
                    leftContent={[
                        <Icon key="0" type="left" style={{ marginRight: '16px' }} />,
                    ]}
                >我的</NavBar>
                <div className="user-head" onClick={()=>{this.props.history.push('/userinfo')}}>
                    <img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3222684675,2148904667&fm=26&gp=0.jpg' alt=""/>
                    <ul>
                <li>{this.props.userName}</li>
                        <li>暂无绑定手机号</li>
                    </ul>
                    <div className="iconfont">&#xe7f3;</div>
                </div>
                <ul className='mine-money'>
                    <li className='first'>
                        <div>0.00<span>元</span></div>
                        <div>我的余额</div>
                    </li>
                    <li className='second'>
                        <div>3<span>个</span></div>
                        <div>我的优惠</div>
                    </li>
                    <li className='third'>
                        <div>0<span>分</span></div>
                        <div>我的积分</div>
                    </li>
                </ul>
                <ul className='mine-menu'>
                    <li onClick={()=>{this.props.history.push('/order')}}><i className="iconfont">&#xe61e;</i>我的订单</li>
                    <li onClick={()=>{this.props.history.push('/userscore')}}><i style={{color:'red'}} className="iconfont">&#xe611;</i>积分商城</li>
                    <li><i style={{color:'yellow'}} className="iconfont third">&#xe612;</i>饿了么会员卡</li>
                    <li><i style={{color:'blue'}} className="iconfont forth">&#xe627;</i>服务中心</li>
                    <li><i style={{color:'blue'}} className="iconfont five">&#xe722;</i>下载饿了么App</li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        userName:state.userInfo.username
    }
}
export default connect(mapStateToProps)(withRouter(Mine))