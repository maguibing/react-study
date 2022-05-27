import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import classNames from 'classnames'
const comments = [
  {
    id: 100,
    name: '__RichMan',
    avatar: 'https://r1.ykimg.com/051000005BB36AF28B6EE4050F0E3BA6',
    content: '这阵容我喜欢😍靳东&闫妮，就这俩名字，我就知道是良心剧集...锁了🔒',
    time: '2021/10/12 10:10:23',
    vip: true,
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
  },
  {
    id: 102,
    name: '大星的妈妈',
    avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
    content:
      '第一集看的有点费力，投入不了，闫妮不太适合啊，职场的人哪有那么多表情，一点职场的感觉都没有',
    time: '2021/07/01 00:30:51',
    vip: true,
  },
]

const element = (
  <div className="comments">
    <h3 className="comm-head">
      热门评论<sub>({comments.length})</sub>
    </h3>
    <ul className="comm-list">
      {comments.map((item) => {
        return (
          <li key={item.id} className="comm-item">
            <div
              className="avatar"
              style={{ backgroundImage: `url(${item.avatar})` }}
            ></div>
            <div className="info">
              <p className={classNames('name', { vip: item.vip })}>
                {item.name}
                {item.vip ? (
                  <img
                    src="https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png"
                    alt=""
                  />
                ) : null}
              </p>
              <p className="time">{item.time}</p>
              <p>{item.content}</p>
            </div>
          </li>
        )
      })}
    </ul>
  </div>
)
ReactDom.render(element, document.getElementById('root'))
