import React, { Component } from 'react'
import CommentHead from './components/CommentHead'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'

export default class App extends Component {

    state = {
        // active
        active:"default",
        // 用户信息
        user: {
          name: '清风徐来',
          avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
          vip: true,
        },
        // 评论列表
        comments: [
          {
            id: 100,
            name: '__RichMan',
            avatar: 'https://r1.ykimg.com/051000005BB36AF28B6EE4050F0E3BA6',
            content:
              '这阵容我喜欢😍靳东&闫妮，就这俩名字，我就知道是良心剧集...锁了🔒',
            time: new Date('2021/10/12 10:10:23'),
            vip: true,
            collect: false,
          },
          {
            id: 101,
            name: '糖蜜甜筒颖',
            avatar:
              'https://image.9xsecndns.cn/image/uicon/712b2bbec5b58d6066aff202c9402abc3370674052733b.jpg',
            content:
              '突围神仙阵容 人民的名义第三部来了 靳东陈晓闫妮秦岚等众多优秀演员实力派 守护人民的财产 再现国家企业发展历程',
            time: new Date('2021/09/23 15:12:44'),
            vip: false,
            collect: true,
          },
          {
            id: 102,
            name: '清风徐来',
            avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
            content:
              '第一集看的有点费力，投入不了，闫妮不太适合啊，职场的人哪有那么多表情，一点职场的感觉都没有',
            time: new Date('2021/07/01 00:30:51'),
            vip: true,
            collect: false,
          },
        ],
    };

    componentDidUpdate () { 
        localStorage.setItem("comments",JSON.stringify(this.state.comments))
    }

    // header 组件更新类型
    updateActive = (active) => {
        this.setState({active})
    }
    
    // updateComments
    updateComments = (content) => {
        // console.log(value)   
        const { user,comments } = this.state
        let item = {
            id: comments.length + 1,
            ...user,
            content,
            time: new Date(),
            collect: false,
        }
        this.setState({
            comments:[...comments,item]
        })
    }

    // delitem
    delitem = (id) => { 
        const { comments } = this.state
        this.setState({comments:comments.filter(v=>v.id!==id)})
    }

    // changeCollet
    changeCollet = (id) => {
        const { comments } = this.state
        this.setState({
            comments: comments.map(v => { 
                if (v.id===id) {
                    return {...v, collect:!v.collect}
                } 
                return v
            })
        })
     }

    render() {
        const {comments,user,active } = this.state
        return (
            <div className="comments">
                <CommentInput updateComments={this.updateComments.bind(this)}/>
                <CommentHead active={active} length={ comments.length} updateActive={this.updateActive.bind(this)} />
                <CommentList comments={comments} user={user} active={active} delitem={this.delitem.bind(this)} changeCollet={ this.changeCollet.bind(this)} />
            </div>
        )
    }
}
