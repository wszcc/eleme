import React,{ Component } from 'react'
import { reqScoreCommnet } from '../../../../api/ajax'
import './comment-score.css'
export class CommentScore extends Component{
    constructor(){
        super()
        this.state={
            score:{
                service_score:0,
                food_score:0,
                overall_score:0,
                deliver_time:0,
                compare_rating:0
            }
        }
    }
    componentDidMount(){
        reqScoreCommnet(`ugc/v2/restaurants/${this.props.id}/ratings/scores`,'GET')
        .then(res=>{
            this.setState({
                score:res.data
            })
        })
    }
    render(){
        return (
            <div className="comment-score-wapper">
               <div className="left">
        <div>{Math.round(this.state.score.food_score*10)/10}</div>
                   <div>综合评价</div>
        <div>高 于 周 边 商 家 {Math.round(this.state.score.compare_rating*1000)/10}%</div>
               </div>
                <div className="right">
                    <div><span>服 务 态 度 </span><span> {Math.round(this.state.score.service_score*10)/10}</span></div>
                    <div><span>菜 品 评 价 </span><span> {Math.round(this.state.score.overall_score*10)/10}</span></div>
                    <div><span>送 达 时 间 </span><span>{Math.round(this.state.score.deliver_time*10)/10} 分钟</span></div>
                </div>
            </div>
        )
    }
}