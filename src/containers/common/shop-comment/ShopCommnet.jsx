import React,{ Component } from 'react'
import { CommentCategory } from './comment-category/CommentCategory'
import  CommentInfo from './comment-info/CommentInfo'
import { CommentScore } from './comment-score/CommentScore'
class ShopComment extends Component{
    render(){
        return (
            <div className="shop-comment-wapper">
                <CommentScore id={this.props.id}></CommentScore>
                <CommentCategory id={this.props.id}></CommentCategory>
                <CommentInfo id={this.props.id}></CommentInfo>
            </div>
        )
    }
}
export default ShopComment