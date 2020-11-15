import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from "react-router";
import { connect } from 'react-redux'
class CurrentService extends Component {
    render() {
        return (
            <div className="current-service">
                <NavBar
                    mode="dark"
                    leftContent={<Icon key="0" type="left" style={{ marginRight: '16px' }} />}
                    onLeftClick={() => { this.props.history.go(-1) }}
                >{this.props.title}</NavBar>
                <p>{this.props.context}</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        title: state.currentService.name,
        context: state.currentService.context
    }
}
export default connect(mapStateToProps)(withRouter(CurrentService))