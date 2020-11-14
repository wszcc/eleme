import React, { Component } from 'react'
import './search-shop-list.css'

export class SearchShopList extends Component {
    render() {
        return (
            <div className="search-shop-list">
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