import { React, Component } from 'react'
import './city-search.css'
import { NavBar, Icon, InputItem, List, WingBlank, Button } from 'antd-mobile';
import { reqCityInfo, reqSearchReault } from '../../../api/ajax'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { currentAddress } from '../../../redux/actions'
class CitySearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: '',
            theSearchResult: ''
        }
    }
    componentDidMount() {
        reqCityInfo(`v1/cities/${this.props.match.params.id}`, 'GET')
            .then(res => {
                this.setState({
                    cityName: res.data.name,
                    searchList: ''
                })
            })
    }
    handleSearchClick = () => {
        reqSearchReault('v1/pois', 'GET', {
            city_id: this.props.match.params.id,
            keyword: this.state.searchRes
        }).then(res => {
            this.setState({
                searchList: res.data
            })
        })
    }
    render() {
        return (
            <div className="city-search">
                <NavBar
                    mode="dark"
                    leftContent={[
                        <Icon key="0" type="left" style={{ marginRight: '16px' }} />,
                    ]}
                    rightContent={<span onClick={() => { this.props.history.go(-1) }}>切换城市</span>}
                    onLeftClick={() => { this.props.history.go(-1) }}
                >{this.state.cityName}</NavBar>
                <WingBlank>
                    <div className="search-wapper">
                        <List>
                            <InputItem
                                placeholder="输入学校、商物楼、地址"
                                onChange={(val) => {
                                    this.setState({
                                        searchRes: val
                                    })
                                }}
                            ></InputItem>
                        </List>
                    </div>
                    <Button onClick={() => {
                        this.handleSearchClick()
                    }} type='primary' size='small'>提交</Button>
                    <br />
                </WingBlank>
                <ul className="search-list">
                    {
                        this.state.searchList ? this.state.searchList.map((item, index) => (
                            <li onClick={() => {
                                this.props.handleCurrentCity(item)
                                this.props.history.push('/home')
                            }} key={index} className='lis'>
                                <div>{item.name}</div>
                                <div>{item.address}</div>
                            </li>
                        )) : ''
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = () => {
    return {

    }
}
const mapCurrentAddress = (dispatch) => {
    return {
        handleCurrentCity(current) {
            const addressAction = currentAddress(current)
            dispatch(addressAction)
        }
    }
}
export default connect(mapStateToProps, mapCurrentAddress)(withRouter(CitySearch))