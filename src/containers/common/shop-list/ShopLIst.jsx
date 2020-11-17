import { React, Component,Suspense,lazy } from 'react'
import { Menu, ActivityIndicator, NavBar, Icon } from 'antd-mobile'
import './shop-list.css'
import { reqAllShopList } from '../../../api/ajax.js'
import { reqNearResturant } from '../../../api/ajax'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Loading } from "../../loading/Loading";
const NearResturant = lazy(()=>import ('../near-resturant/NearResturant'))
let data = [
    {
        value: '1',
        label: 'Food',
        children: [
            {
                label: 'All Foods',
                value: '1',
            },
            {
                label: 'Chinese Food',
                value: '2',
            }, {
                label: 'Hot Pot',
                value: '3',
            }, {
                label: 'Buffet',
                value: '4',
            }, {
                label: 'Fast Food',
                value: '5',
            }, {
                label: 'Snack',
                value: '6',
            }, {
                label: 'Bread',
                value: '7',
            }, {
                label: 'Fruit',
                value: '8',
            }, {
                label: 'Noodle',
                value: '9',
            }, {
                label: 'Leisure Food',
                value: '10',
            }],
    }, {
        value: '2',
        label: 'Supermarket',
        children: [
            {
                label: 'All Supermarkets',
                value: '1',
            }, {
                label: 'Supermarket',
                value: '2',
            }, {
                label: 'C-Store',
                value: '3',
            }, {
                label: 'Personal Care',
                value: '4',
            }],
    },
    {
        value: '3',
        label: 'Extra',
        isLeaf: true,
        children: [
            {
                label: 'you can not see',
                value: '1',
            },
        ],
    },
];
class ShopList extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
            nearResturantArr:''
        };
    }
    componentDidMount() {
        reqNearResturant('shopping/restaurants', 'GET', {
            latitude: this.props.latitude,
            longitude: this.props.longitude,
        }).then(res => {
            this.setState({
                nearResturantArr: res.data
            })
        })
        reqAllShopList('shopping/v2/restaurant/category', 'GET')
            .then(res => {
                const myData = Array(res.data.length)
                res.data.forEach((i, index) => {
                    myData[index] = {
                        value: '',
                        label: '',
                        children: []
                    }
                })
                res.data.forEach((item, index) => {
                    myData[index].value = index + 1
                    myData[index].label = item.name
                    item.sub_categories.forEach((it, i) => {
                        myData[index].children[i] = {
                            value: i + 1,
                            label: it.name,
                            id:it.id
                        }
                    })
                })
                data = myData
            })
    }
    onChange = (value)=>  {
        let label = '';
        let id=data[value[0]].children[value[1]].id
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label)
        reqNearResturant('shopping/restaurants', 'GET', {
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            restaurant_category_id:id
        }).then(res => {
            this.setState({
                nearResturantArr: res.data,
                show:!this.state.show
            })
        })
        
    }
    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
            setTimeout(() => {
                this.setState({
                    initData: data,
                });
            }, 500);
        }
    }

    onMaskClick = () => {
        this.setState({
            show: false,
        });
    }
    render() {
        const { initData, show } = this.state
        const menuEl = (
            <Menu
            // style={{
            //     position:'fixed',
            //     top:'92px',
            //     left:'0',
            //     right:'0',
            //     opacity: 1,
                
            // }}
                className="foo-menu"
                data={initData}
                value={['1', '3']}
                onChange={this.onChange}
                height={document.documentElement.clientHeight * 0.6}
            />
        );
        const loadingEl = (
            <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <Suspense fallback={<Loading></Loading>}>
                <div className="shop-list">
                <NavBar
                   
                    onLeftClick={()=>{this.props.history.go(-1)}}
                    mode="dark"
                    leftContent={[
                        <Icon key="0" type="left" style={{ marginRight: '16px' }} />,
                    ]}

                >{this.props.match.params.name}</NavBar>
                <div className={show ? 'menu-active' : ''}>

                    <div>
                        
                        <NavBar
            
                            mode='light'
                            leftContent='分类'
                            onLeftClick={this.handleClick}
                            className="top-nav-bar"
                        ></NavBar>
                    </div>
                    {show ? initData ? menuEl : loadingEl : null}
                    {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
                </div>
                <div className="newr-reaturant">
                    
                    <div className="near-resturant-title">附近商家</div>
                    {
                         this.state.nearResturantArr ? this.state.nearResturantArr.map((item, index) => (
                            <NearResturant key={index} nearResturantInfo={item}></NearResturant>
                        )) : ''
                    }
                </div>
            </div>
            </Suspense>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        latitude: state.currentAddress.latitude,
        longitude: state.currentAddress.longitude
    }
}
export default connect(mapStateToProps,)(withRouter(ShopList))