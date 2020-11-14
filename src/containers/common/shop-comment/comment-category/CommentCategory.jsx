import React,{ Component } from 'react'
import { reqCategoryComment } from '../../../../api/ajax'
import './comment-category.css'
export class CommentCategory extends Component{
    constructor(){
        super()
        this.state={
            categoryData:''
        }
    }
    componentDidMount(){
        reqCategoryComment(`ugc/v2/restaurants/${this.props.id}/ratings/tags`,'GET')
        .then(res=>{
            this.setState({
                categoryData:res.data
            })
        })
    }
    render(){
        return (
            <div className="comment-category-wapper">
                {
                    this.state.categoryData?this.state.categoryData.map((item,index)=>(
                    <div key={index}>{`${item.name} (${item.count})`}</div>
                    )):''
                }
            </div>
        )
    }
}