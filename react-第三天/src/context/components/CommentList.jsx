const CommentList = () => {
    return (
      <ul className="comm-list">
        <li className="comm-item">
          <div className="avatar"></div>
          <div className="info">
            <p className="name vip">
              清风徐来
              <img alt="" src="https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png" />
            </p>
            <p className="time">
              <span>2012-12-12</span>
              <span className="iconfont icon-collect"></span>
              <span className="del">删除</span>
            </p>
            <p>
              这里是评论的内容！！！这里是评论的内容！！！这里是评论的内容！！！
            </p>
          </div>
        </li>
        <li className="comm-item">
          <div className="avatar"></div>
          <div className="info">
            <p className="name">
              清风徐来
            </p>
            <p className="time">
              <span>2012-12-12</span>
              <span className="iconfont icon-collect-sel"></span>
            </p>
            <p>
              这里是评论的内容！！！这里是评论的内容！！！这里是评论的内容！！！
            </p>
          </div>
        </li>
      </ul>
    )
  }
  
  export default CommentList