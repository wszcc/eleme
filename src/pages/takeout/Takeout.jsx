import { React, Component } from 'react'
import './takeout.css'
import { reqFoodSort, reqNearResturant } from '../../api/ajax'
import { NavBar, Icon, Grid } from 'antd-mobile';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import NearResturant from '../../containers/common/near-resturant/NearResturant'


class Takeout extends Component {
   
    state = {
        sortData: [],
        nearResturantArr: '',
    }
    handleReqNearResturant=()=>{
        reqNearResturant('shopping/restaurants', 'GET', {
            latitude: this.props.latitude,
            longitude: this.props.longitude,
        }).then(res => {
            this.setState({
                nearResturantArr: res.data
            })
        })
    }
    componentDidMount() {
        reqFoodSort('v2/index_entry', 'GET').then(res => {
            this.setState({
                sortData: res.data.map((_val) => ({
                    icon: `${this.props.imgUrl}${_val.image_url}`,
                    text: `${_val.title}`,
                }))
            })
        })
       this.handleReqNearResturant()
    }
    render() {
        return (
            <div className="take-out-wapper">
                <NavBar
                    mode="dark"
                    leftContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    rightContent={[
                        <div
                        key='1'
                            onClick={() => {
                                document.getElementById('home-mine').click()
                            }}
                            className='iconfont'
                            style={{
                                fontSize: '20px'
                            }}>&#xe619;</div>
                    ]}
                    onLeftClick={() => {
                        document.getElementById('home-search').click()
                    }}
                >{this.props.address}</NavBar>
               
                <Grid onClick={(e)=>{this.props.history.push(`/shoplist/${e.text}`)}} data={this.state.sortData} activeStyle={true} />
                <div className="newr-reaturant">
                    
                    <div className="near-resturant-title">附近商家</div>
                    {
                         this.state.nearResturantArr ? this.state.nearResturantArr.map((item, index) => (
                            <NearResturant key={index} nearResturantInfo={item}></NearResturant>
                        )) : ''
                    }
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        imgUrl: state.imgBaseUrl,
        address: state.currentAddress.name,
        latitude: state.currentAddress.latitude,
        longitude: state.currentAddress.longitude
    }
}
export default connect(mapStateToProps,)(withRouter(Takeout))