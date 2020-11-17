import { React, Component } from 'react'
import './all-city-item.css'
import { withRouter } from 'react-router'

class AllCityItem extends Component { 
    
    constructor(){
        super()
        this.state={
            cityInfo:[]
        }
    }
    componentDidMount(){
        this.setState({
            cityInfo:this.props.cityInfo
        })
    }
    render() {
        return (
            <div className="all-city-item-wapper">
                <div className="city-name">
                    {this.props.cityName}&nbsp;
                    <span>(按字母排序)</span>
                </div>
                <ul className="city-into">
                    {
                        this.state.cityInfo.map((item,index)=>(
                        <li key={index}
                        onClick={()=>{this.props.history.push(`/citysearch/${item.id}`)}}>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default withRouter(AllCityItem)