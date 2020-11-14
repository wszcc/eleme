import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import './resturant-detail.css'
import { Tabs, Badge } from 'antd-mobile';
import { reqShopFoodSortList } from '../../../api/ajax'
import ShopFoodDetail from '../../common/shop-food-detail/ShopFoodDetail'
import { ShopComment } from '../shop-comment/ShopCommnet'
const tabs = [
    { title: <Badge>商品</Badge> },
    { title: <Badge>评价</Badge> }
];

class ResturantDetail extends Component {
    constructor() {
        super()
        this.state = {
            leftData: '',
            currentCategory: {},
            totalPrice: 0
        }
    }
    componentDidMount() {
        reqShopFoodSortList('shopping/v2/menu', 'GET', { restaurant_id: this.props.currentResturantInfo.id })
            .then(res => {
                this.setState({
                    leftData: res.data,
                    currentCategory: res.data[0]
                })
            })
    }
    render() {
        return (
            <div className="resturant-detail">
                <div className="resturant-filter">
                    <img src={`${this.props.imgUrl}${this.props.currentResturantInfo.image_path}`} alt="" />
                </div>
                <div className="resturant-detail-container">
                    <img src={`${this.props.imgUrl}${this.props.currentResturantInfo.image_path}`} alt="" />
                    <ul>
                        <li>{this.props.currentResturantInfo.name}</li>
                        <li>{`${this.props.currentResturantInfo.category}/${this.props.currentResturantInfo.piecewise_agent_fee.tips}`}</li>
                        <li>{`公告:${this.props.currentResturantInfo.promotion_info}`}</li>
                    </ul>
                </div>
                <i className="iconfont" onClick={() => { this.props.history.go(-1) }}>&#xe606;</i>
                <div>
                    <Tabs tabs={tabs}
                        initialPage={0}
                        // onChange={(tab, index) => {
                        //     !index ? document.querySelector('.resturant-detail .shop-car').style.display = 'block' :
                        //     document.querySelector('.resturant-detail .shop-car').style.display = 'none'
                        // }}
                    >
                        <div className='left-wapper'>
                            <ul className="left">
                                {
                                    this.state.leftData ? this.state.leftData.map((item, index) => (
                                        <li onClick={() => {
                                            this.setState({
                                                currentCategory: this.state.leftData[index]
                                            })
                                            console.log(this.state.currentCategory)
                                        }} key={index}>{item.name}</li>
                                    )) : ''
                                }
                            </ul>
                            <div className="right"
                                style={{
                                    height: `${this.state.leftData.length * 40}px`,
                                    width: '100%'
                                }}>
                                <ShopFoodDetail detailInfo={this.state.currentCategory}></ShopFoodDetail>
                            </div>
                        </div>
                        <div>
                            <ShopComment id={this.props.currentResturantInfo.id}></ShopComment>
                        </div>
                    </Tabs>
                </div>
                <ul className="shop-car">
                    <li className='iconfont'>&#xe652;</li>
                    <li>￥ {`${this.props.foodCount * 20}.00`}</li>
                    <li onClick={() => { this.props.history.push('/order') }}>提交订单</li>
                    <li className="food-number">{this.props.foodCount}</li>
                </ul>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentResturantInfo: state.currentResturantInfo,
        imgUrl: state.imgUrl,
        foodCount: state.totalFood.length
    }
}
export default connect(mapStateToProps,)(withRouter(ResturantDetail))