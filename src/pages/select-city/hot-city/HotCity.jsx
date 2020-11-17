import { React, Component } from 'react'
import './hot-city.css'
import { reqCityList } from '../../../api/ajax'
import { withRouter } from 'react-router'

 class HotCity extends Component {
    constructor() {
        super()
        this.state = {
            hotCityList: ''
        }
    }
    
    componentDidMount() {
        reqCityList('v1/cities', 'GET', { type: 'hot' })
            .then(res => {
                this.setState({
                    hotCityList: res.data
                })
            })
    }
    render() {
        return (
            <div className="hot-city-wapper">
                <div className="hot-city">
                    热门城市
                </div>
                <ul className="hot-city-list">
                    {
                        this.state.hotCityList ? this.state.hotCityList.map((item, index) => (
                            <li onClick={()=>{this.props.history.push(`/citysearch/${item.id}`)}} key={index}>{item.name}</li>
                        )) : ''
                    }
                </ul>
            </div>
        )
    }
}
export default withRouter(HotCity)