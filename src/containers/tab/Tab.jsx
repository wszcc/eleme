import { TabBar } from 'antd-mobile';
import { React, Component,lazy,Suspense } from 'react'
import { withRouter } from 'react-router-dom'
import { Loading } from '../loading/Loading'
const Takeout =lazy(()=>import('../../pages/takeout/Takeout'))
const Mine =lazy(()=>import('../../pages/mine/Mine'))
const Order =lazy(()=>import('../../pages/order/Order'))
const Search =lazy(()=>import('../../pages/search/Search'))
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true
    }
  }
  render() {
    return (
      <Suspense fallback={<Loading></Loading>} maxDuration={1}>
 <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="外卖"
          key="Life"
          icon={<div
            className='iconfont' style={{
              width: '22px',
              fontSize: '35px',
              height: '30px',
              lineHeight: '30px',
              textAlign: 'center',
              marginLeft: '-10px'
            }}
          >&#xe722;</div>
          }
          selectedIcon={<div
            className='iconfont' style={{
              width: '22px',
              fontSize: '35px',
              height: '30px',
              lineHeight: '30px',
              textAlign: 'center',
              marginLeft: '-10px'

            }}
          >&#xe722;</div>
          }
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          <Takeout></Takeout>
        </TabBar.Item>
        <TabBar.Item

          icon={
            <div
              id='home-search'
              className='iconfont' style={{
                width: '22px',
                fontSize: '25px',
                height: '30px',
                lineHeight: '30px',
              }}
            >&#xe60c;</div>
          }
          selectedIcon={
            <div
              className='iconfont' style={{
                width: '22px',
                fontSize: '25px',
                height: '30px',
                lineHeight: '30px',
              }}
            >&#xe60c;</div>
          }
          title="搜索"
          key="Koubei"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          <Search></Search>
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div
            id='home-order'
              className='iconfont' style={{
                width: '22px',
                fontSize: '25px',
                height: '30px',
                lineHeight: '30px',
              }}
            >&#xe61e;</div>
          }
          selectedIcon={
            <div
              className='iconfont' style={{
                width: '22px',
                fontSize: '25px',
                height: '30px',
                lineHeight: '30px',
              }}
            >&#xe61e;</div>
          }
          title="订单"
          key="Friend"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });

          }}
        >
          <Order></Order>
        </TabBar.Item>
        <TabBar.Item
          icon={<div
            id='home-mine'
            className='iconfont' style={{
              width: '22px',
              fontSize: '25px',
              height: '30px',
              lineHeight: '30px',
            }}
          >&#xe619;</div>}
          selectedIcon={<div
            className='iconfont' style={{
              width: '22px',
              fontSize: '25px',
              height: '30px',
              lineHeight: '30px',
            }}
          >&#xe619;</div>}
          title="我的"
          key="my"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });

          }}
        >
          <Mine></Mine>
        </TabBar.Item>
      </TabBar>
    </div>
      </Suspense>
     
     
    );
  }
}

export default withRouter(Tab)
