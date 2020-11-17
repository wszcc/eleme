import { React, Component } from 'react'
import './search-input.css'
import { reqRestaurant } from '../../../api/ajax'
import { connect } from 'react-redux'
import  SearchShopList  from '../../../containers/common/search-shop-list/SearchShopLIst'
class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            searchResList:''
        }
    }
    handleInputClick = () => {
        this.setState({
            inputValue: document.getElementById('search-input').value
        })
        reqRestaurant('v4/restaurants', 'GET', {
            geohash: this.props.geohash,
            keyword: this.state.inputValue
        }).then(res => {
            this.setState({
                searchResList:res.data
            })
            console.log(res.data)
        })
        console.log(this.state.inputValue)
        
    }
    render() {
        return (
            <div className="search-input-wapper">
                <div className="search-input">
                    <input id='search-input' placeholder='请输入商家或美食的名字' className='submit-input' type="text" />
                    <button onClick={this.handleInputClick} className='submit-button'>提交</button>
                </div>
                {
                    (this.state.searchResList instanceof Array)?this.state.searchResList.map((item,index)=>(
                        <SearchShopList key={index} searchInfo={item}></SearchShopList>
                    )):''
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        geohash: state.currentAddress.geohash
    }
}
export default connect(mapStateToProps)(SearchInput)
