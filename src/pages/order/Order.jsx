import { React, Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './order.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { deleteFoodActon } from '../../redux/actions'
class Order extends Component {
    
    render() {
        return (
            <div className="order-wapper">
                <NavBar
                    //  style={{
                    //     position: "fixed",
                    //     left: '0', right: '0',
                    //     top:'0'
                    // }}
                    onLeftClick={()=>{this.props.history.go(-1)}}
                    mode="dark"
                    leftContent={[
                        <Icon key="0" type="left" style={{ marginRight: '16px' }} />,
                    ]}

                >订单列表</NavBar>
               <ul className="container">
                    {
                        this.props.totalFood ? this.props.totalFood.map((item, index) => (
                            <li className='detail-info-item' key={index}>
                                <img src={`${this.props.imgUrl}${item.image_path}`} alt="" />
                                <ul>
                                    <li>{item.name}</li>
                                    <li>{item.description}</li>
                                    <li>{item.tips}</li>
                                    <li><span>￥20 起</span><span onClick={()=>{this.props.handleDeleteFood(item)}}>-</span></li>
                                </ul>
                            </li>
                        )) : ''
                    }
                </ul>
               <div className="order-menu">
                <div>待支付 ￥{this.props.totalFood.length*20}.00</div>
                   <div>确认下单</div>
               </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        imgUrl: state.imgUrl,
        totalFood:state.totalFood
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleDeleteFood(food){
            const delFood=deleteFoodActon(food)
            dispatch(delFood)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Order))