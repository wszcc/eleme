import React, { Component } from 'react'
import './shop-food-detail.css'
import { connect } from 'react-redux'
import { addFoodAction } from '../../../redux/actions'
 class ShopFoodDetail extends Component {
    render() {
        return (
            <div className="shop-food-detail-wapper">
              {
                  this.props.detailInfo.name?<><div className="title">
                  <span>{this.props.detailInfo.name}</span>
                  <span>{this.props.detailInfo.description}</span>
              </div>
              <ul className="container">
                  {
                      this.props.detailInfo.foods ? this.props.detailInfo.foods.map((item, index) => (
                          <li className='detail-info-item' key={index}>
                              <img src={`${this.props.imgUrl}${item.image_path}`} alt="" />
                              <ul>
                                  <li>{item.name}</li>
                                  <li>{item.description}</li>
                                  <li>{item.tips}</li>
                                  <li><span>￥20 起</span><span onClick={()=>{this.props.dispatchFood(item)}}>+</span></li>
                              </ul>
                          </li>
                      )) : ''
                  }
              </ul></>:''
              }
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    return {
        imgUrl:state.imgUrl,
        totalFood:state.totalFood
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        dispatchFood(item){
            const addFood=addFoodAction(item)
            dispatch(addFood)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopFoodDetail)