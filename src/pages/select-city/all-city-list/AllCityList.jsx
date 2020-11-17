import { React, Component } from 'react'
import './all-city-list.css'
import { reqCityList } from "../../../api/ajax";
import  AllCityItem  from './all-city-item/AllCityItem'
 class AllCityList extends Component {
    
    constructor(){
        super()
        this.state = {
            allCityObj: ''
        }
    }
    componentDidMount() {
        reqCityList('v1/cities', 'GET', { type: 'group' })
            .then(res => {
                this.setState({
                    allCityObj: res.data
                })
            })
    }
    render() {
        return (
            <div className="all-city-list-wapper">
                {
                    this.state.allCityObj ? Object.keys(this.state.allCityObj).map((item,index)=>(
                        <AllCityItem key={index} cityInfo={this.state.allCityObj[item]} cityName={item}></AllCityItem>
                    )) : ''
                }
            </div>
        )
    }
}
export default AllCityList