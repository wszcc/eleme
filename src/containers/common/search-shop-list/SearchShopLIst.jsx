import React, { Component } from 'react'
import './search-shop-list.css'
import { connect } from "react-redux";
import { withRouter } from 'react-router'
class SearchShopList extends Component {
    handleResturantDetail=()=>{
        this.props.history.push('/resturant/detail')
   }
    render() {
        return (
            <div className="search-shop-list"
            onClick={this.handleResturantDetail}>
                <div><img src={`//elm.cangdu.org/img/${this.props.searchInfo.image_path}`} alt='img'></img></div>
                <div>
                    <ul>
                        <li>{this.props.searchInfo.name}</li>
                        <li>月售 {this.props.searchInfo.recent_order_num} 单</li>
                        <li><span>{this.props.searchInfo.piecewise_agent_fee.tips} / </span><span>{this.props.searchInfo.distance}</span></li>
                    </ul>
                </div>
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
export default connect(mapStateToProps)(withRouter(SearchShopList))