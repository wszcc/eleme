import { React, Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import SearchInput from './search-input/SearchInput'
import './search.css'
class Search extends Component {
   
    render() {
        return (
            <div className="search-wapper">
                <NavBar
                    style={{
                        marginTop: '-10px'
                    }}
                    mode="dark"
                    leftContent={[
                        <Icon key="0" type="left" style={{ marginRight: '16px' }} />,
                    ]}

                >搜索</NavBar>
                <SearchInput></SearchInput>
            </div>
        )
    }
}
export default Search