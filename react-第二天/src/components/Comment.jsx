import React, { Component,createRef } from 'react';
// import './index.css';
import classnames from 'classnames'
import '../index.css'

export default class Comment extends Component {

    target = createRef()

    state = {
        content: "",
        // 当前用户
        user: {
            name: '清风徐来',
            vip: true,
            avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
        },
        // 评论列表
        comments: [
            {
                id: 100,
                name: '__RichMan',
                avatar: 'https://r1.ykimg.com/051000005BB36AF28B6EE4050F0E3BA6',
                content:
                    '这阵容我喜欢😍靳东&闫妮，就这俩名字，我就知道是良心剧集...锁了🔒',
                time: '2021/10/12 10:10:23',
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
                time: '2021/09/23 15:12:44',
                vip: false,
                collect: true,
            },
            {
                id: 102,
                name: '清风徐来',
                avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
                content:
                    '第一集看的有点费力，投入不了，闫妮不太适合啊，职场的人哪有那么多表情，一点职场的感觉都没有',
                time: '2021/07/01 00:30:51',
                vip: true,
                collect: false,
            },
        ],
    };


    click = () => {
        if (this.state.content.length < 1) return
        const { content, user, comments } = this.state
        const item = {
            id: parseInt(Math.random() * 1000),
            ...user,
            content,
            collect: false,
            time: new Date().toLocaleString()
        }
        this.setState({
            comments: [item, ...comments],
            content: ""
        })
       

    }

    update = (e) => {
        if (e.target.value.length > 100) return
        this.setState({
            content: e.target.value
        })
    }

    delete = (a) => {
        this.setState({
            comments: this.state.comments.filter(v => v.id !== a)
        })
    }

    clickIcon = (v) => {
        this.setState({
            comments: this.state.comments.map(j => { 
                if (j.id === v.id) { 
                    return {...j,collect:!j.collect}
                }else{
                    return j
                }
            })
        })
    }
    
    render () {
        const { user, comments } = this.state
        
        return (
        <div className="comments">
            <h3 className="comm-head">评论</h3>
            <div className="comm-input">
            <textarea placeholder="爱发评论的人，运气都很棒" value={this.state.content} onChange={this.update}></textarea>
            <div className="foot">
                <div className="word">{this.state.content.length}/100</div>
                <div className="btn" onClick={this.click}>发表评论</div>
            </div>
            </div>
            <h3 className="comm-head">热门评论<sub>({comments.length})</sub>
            </h3>
                <ul className="comm-list">
                    {comments.map((v, i) => (
                        <li className="comm-item" key={i}>
                            <div className="avatar" style={{backgroundImage:`url(${v.avatar})`}}></div>
                            <div className="info">
                                <p className={classnames("name", {vip:v.vip})}>{v.name}
                                <img alt="" src={ v.vip?"https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png":null}/>
                            </p>
                            <p className="time">
                                    {v.time}
                                    <span className={`iconfont icon-collect${v.collect ? '-sel' : ''}`} onClick={()=>this.clickIcon(v)}></span>
                                    <span className="del" onClick={this.delete.bind(this, v.id)}>{v.name === user.name ? "删除" : null}</span>
                            </p>
                            <p>{v.content} </p>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
        );
    }
}