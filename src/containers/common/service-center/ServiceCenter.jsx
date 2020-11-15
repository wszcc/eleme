import React,{ Component } from 'react'
import { NavBar,Icon } from 'antd-mobile'
import { withRouter } from 'react-router'
import { reqServiceCenter } from '../../../api/ajax'
import './service-center.css'
import { connect } from 'react-redux'
import { changeService } from '../../../redux/actions'
class ServiceCenter extends Component{
    constructor(){
        super()
        this.state={
            cateArr:'',
            cateObj:{}
        }
    }
    createServiceObj=(item,index)=>{
        return {
            name:this.state.cateObj[item],
            context:this.state.cateObj[this.state.cateArr.contextArr[index]]
        }
    }
    componentDidMount(){
        reqServiceCenter('v3/profile/explain','GET')
        .then(res=>{
            this.setState({
                cateArr:this.categoryData(res.data),
                cateObj:res.data
            })
        })
    }
    categoryData(data){
        const captionArr=[]
        const contextArr=[]
        Object.keys(data).forEach((item)=>{
            if(item.includes('Caption')){
                captionArr.push(item)
            }else if(item.includes('Content')){
                contextArr.push(item)
            }
        })
        return {
            captionArr,
            contextArr
        }
    }
    render(){
        return(
            <div className="service-center-wapper">
                 <NavBar
                    mode="dark"
                    leftContent={<Icon key="0" type="left" style={{ marginRight: '16px' }} />}
                    onLeftClick={() => { this.props.history.go(-1) }}
                >服务中心</NavBar>
                <ul className='serveicer'>
                    <li><div className="iconfont">&#xe60a;</div>在线客服</li>
                    <li><div className="iconfont">&#xe648;</div>在线客服</li>
                </ul>
                <div className="hot-problem">热门问题</div>
                <ul className='problem-caption'>
                    {
                        this.state.cateArr?this.state.cateArr.captionArr.map((item,index)=>(
                        <li onClick={()=>{this.props.handleServiceDispatch(this.createServiceObj(item,index))
                        this.props.history.push('/currentservice')}} key={index}>{this.state.cateObj[item]} <i className="iconfont">&#xe7f3;</i></li>
                        )):''
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        service:state.currentService
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleServiceDispatch(service){
            const serviceAction=changeService(service)
            dispatch(serviceAction)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ServiceCenter))