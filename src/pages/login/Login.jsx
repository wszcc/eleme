import React, {Component } from 'react'
import { NavBar, Icon, List, InputItem, Switch, WingBlank, Button } from 'antd-mobile';
import './login.css'
import { reqConfirmNumber,login } from '../../api/ajax'
import { withRouter } from 'react-router'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switchCheck: false,
            passwordInput: 'password',
            userName:'',
            password:'',
            confirmNum:'',
            imgCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAeCAMAAACMnWmDAAAAGFBMVEUAAABQUFAAAAAAAAAAAAAAAAAAAAAAAABiRp8mAAAACHRSTlMA/wAAAAAAACXRGJEAAAmJSURBVHjaAX4JgfYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAAAAAAAAAAAAAAAAAQEBAQEAAAAAAAAAAAEBAQEBAQAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAQEBAAABAQEBAAAAAAAAAAAAAAEBAQEBAQEBAAAAAAAAAAEBAQEBAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAABAQEBAAAAAAAAAAABAQEBAAAAAAEBAQAAAAAAAAEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAABAQEBAAAAAAAAAAEBAQAAAAAAAAABAQAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAABAQEBAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAEBAQEAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAEBAQEAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAABAQAAAQEBAQEAAAAAAAAAAAEBAQEAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEAAAAAAAABAQEBAQEBAQEBAQAAAAAAAAEBAQEAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAEBAQEBAAAAAAABAQAAAAAAAAEBAQEAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAEBAQAAAAAAAAAAAQEAAAAAAAEBAQEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAAAAAAAAAAEBAAAAAAAAAAAAAQEAAAAAAAABAQEBAQEBAQAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAAAAAAAAAAEBAAAAAAAAAAAAAQEAAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAEBAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAEBAQAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAAAAAAABAQEAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAAAAAAAAAQEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAAAAAAAAAAEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPVgGtn7rRWAAAAABJRU5ErkJggg=='
        }
    }
    handleSwitchClick = () => {
        this.setState({
            switchCheck: !this.state.switchCheck
        })
    }
    handleConfirmClick=()=>{
        reqConfirmNumber('v1/captchas', 'POST')
        .then(res => {
            this.setState({
                imgCode:res.data.code
            })            
        })
    }
    componentDidMount() {
        this.handleConfirmClick()
    }
    handleLoginClick=()=>{
        let userInfo={
            username:this.state.userName,
            password:this.state.password,
            captcha_code:this.state.confirmNum
        }
        login('v2/login','POST',userInfo)
        .then(res=>{
            console.log(res)
        })

    }
    render() {
        return (
            <div className="login">
                <NavBar
                    mode="dark"
                    leftContent={[
                        <Icon key="0" type="left" style={{ marginRight: '16px' }} />,
                    ]}
                    onLeftClick={() => { this.props.history.push('/selectcity') }}
                >密码登录</NavBar>
                <List renderHeader={() => ' '}>
                    <InputItem
                        key='1'
                        type="text"
                        placeholder='账号'
                        onChange={(val)=>{
                            this.setState({
                                userName:val
                            })
                        }}
                    ></InputItem>
                    <InputItem
                    key='2'
                    onChange={(val)=>{
                        this.setState({
                            password:val
                        })
                    }}
                        ref={this.myRef}
                        type={this.state.passwordInput}
                        placeholder='密码'
                        extra={<Switch
                            checked={this.state.switchCheck}
                            onChange={() => {
                                if (this.state.switchCheck) {
                                    this.setState({
                                        passwordInput: 'password'
                                    })
                                } else {
                                    this.setState({
                                        passwordInput: 'text'
                                    })
                                }
                            }}
                            onClick={this.handleSwitchClick}
                        />}
                    ></InputItem>
                    <InputItem
                    key='3'
                    onChange={(val)=>{
                        this.setState({
                            confirmNum:val
                        })
                    }}
                        type="text"
                        placeholder='验证码'
                        extra={<div
                            onClick={this.handleConfirmClick}
                            style={{
                                width: '50px',
                                display:'flex',
                            }}><img style={
                                {
                                    width: '50px'
                                }
                            } src={this.state.imgCode} alt="" /></div>}
                    ></InputItem>
                </List>
                <WingBlank>
                    <div className="alert">
                        温馨提示:未经注册过的账号,登录时将自动注册<br /><br />
                        注册过的用户可凭账号密码登录
                    </div>
                </WingBlank>
                <WingBlank>
                    <Button style={{
                        backgroundColor: '#4CD964'
                    }}
                    onClick={this.handleLoginClick}>登录</Button>
                </WingBlank>
            </div>

        )
    }
}
export default withRouter(Login)