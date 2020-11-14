import React, { Component } from 'react'
import './near-resturant.css'
import { currentResturantDetail } from '../../../redux/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
class NearResturant extends Component {
   handleResturantDetail=()=>{
        this.props.history.push('/resturant/detail')
        this.props.handleCurrentResturant(this.props.nearResturantInfo)
   }
    render() {
        return (
            <div className="near-resturant"
            onClick={this.handleResturantDetail}>
                <ul>
                    <li><img src={`${this.props.imgUrl}${this.props.nearResturantInfo.image_path}`} alt="" /></li>
                    <li className='left'>
                        <div><span>品牌</span><span>{this.props.nearResturantInfo.name}</span></div>
                        <div><span>评分 {this.props.nearResturantInfo.rating}</span> <span>月售100单</span></div>
                        <div>￥20元起送 / {this.props.nearResturantInfo.piecewise_agent_fee.tips}</div>
                    </li>
                    <li className='right'>
                        <div>保准票</div>
                        <div><span>{this.props.nearResturantInfo.delivery_mode.text} </span><span> 准时达</span></div>
                        <div><span>{this.props.nearResturantInfo.distance}</span><span>2小时56分钟</span></div>
                    </li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        imgUrl: state.imgUrl,
        imgBaseUrl: state.imgBaseUrl
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleCurrentResturant(current){
            const currentAction=currentResturantDetail(current)
            dispatch(currentAction)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NearResturant))