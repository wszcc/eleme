import React, { Component } from 'react'
import { reqInfoComment } from '../../../../api/ajax'
import { connect } from 'react-redux'
import './comment-info.css'
class CommentInfo extends Component {
    constructor() {
        super()
        this.state = {
            commentInfoArr: ''
        }
    }
    componentDidMount() {
        reqInfoComment(`ugc/v2/restaurants/${this.props.id}/ratings`, 'GET')
            .then(res => {
                this.setState({
                    commentInfoArr: res.data
                })
            })
    }
    render() {
        return (
            <div className="comment-info-wapper">
                {
                    this.state.commentInfoArr ? this.state.commentInfoArr.map((item, index) => (
                        <div className='info-wapper' key={index}>
                            <div className='img-box'><img src={`${this.props.imgUrl}/${item.avatar}`} alt="" /></div>
                            <div className="username">{item.username}</div>
                            <div className='time'>{item.rated_at}</div>
                        </div>
                    )) : ''
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        imgUrl: state.imgBaseUrl
    }
}
export default connect(mapStateToProps)(CommentInfo)