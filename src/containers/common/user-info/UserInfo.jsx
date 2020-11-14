import React, { Component } from 'react'
import './user-info.css'
import { NavBar, Icon, Modal } from 'antd-mobile';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {changeUserName,changeAddress} from '../../../redux/actions'
const prompt = Modal.prompt;
const alert = Modal.alert
export class UserInfo extends Component {
    render() {
        return (
            <div className="user-info-wapper">
                <NavBar
                    mode="dark"
                    leftContent={<Icon key="0" type="left" style={{ marginRight: '16px' }} />}
                    onLeftClick={() => { this.props.history.go(-1) }}
                >账户信息</NavBar>
                <div
                onClick={()=>{this.props.history.push('/userhead')}} className='head'><div>头像</div><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3222684675,2148904667&fm=26&gp=0.jpg" alt="" /></div>
                <div
                onClick={() => prompt(
                    '用户名',
                    '',
                    [
                        { text: '取消' },
                        { text: '提交', onPress: username =>{this.props.handleChangeUserName(username)} },
                    ],
                )} className='user-name'><span>用户名</span>{this.props.userName} <i className='iconfont'>&#xe7f3;</i></div>
                <div
                onClick={() => prompt(
                    '收货地址',
                    '',
                    [
                        { text: '取消' },
                        { text: '提交', onPress: address =>{this.props.handleChangeAddress(address)} },
                    ],
                )}  className='address'>收货地址<i className='iconfont'>&#xe7f3;</i></div>
                <div className='phone'>
                    <div>账号绑定</div>
                    <div
                     onClick={() =>
                        alert('请前往手机App中设置', ``, [
                          { text: 'Ok'},
                        ])
                      }>手机<i className='iconfont'>&#xe7f3;</i></div>
                </div>
                <div className='phone'>
                    <div>安全设置</div>
                    <div>登录密码<i style={{ marginLeft: '230px' }} className='iconfont'>&#xe7f3;</i></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userName: state.userInfo.username
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleChangeUserName(name){
            const changeUserNameAction=changeUserName(name)
            dispatch(changeUserNameAction)
        },
        handleChangeAddress(address){
            const changeAddressAction=changeAddress(address)
            dispatch(changeAddressAction)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UserInfo))