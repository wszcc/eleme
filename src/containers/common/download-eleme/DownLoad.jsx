import React,{ Component } from 'react'
import './down-load.css'
import { withRouter } from "react-router";
import { NavBar, Icon } from 'antd-mobile';

class DownLoad extends Component{
    render(){
        return (
            <div className="download-wapper">
                 <NavBar
                    mode="dark"
                    leftContent={<Icon key="0" type="left" style={{ marginRight: '16px' }} />}
                    onLeftClick={() => { this.props.history.go(-1) }}
                >下载饿了么App</NavBar>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1428500185,3894931827&fm=26&gp=0.jpg" alt=""/>
               <a className='download-app' href="https://www.ele.me/">下载App</a>
            </div>
        )
    }
}
export default withRouter(DownLoad)