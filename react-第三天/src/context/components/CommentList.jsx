import dayjs from 'dayjs';
const CommentList = (props) => {
    const formatTime = (time) => dayjs(time).format('YYYY/MM/DD HH:mm:ss');
    const { comments, active } = props
    let newComments = [...comments]
    // sort方法会改变原数组
    if (active === 'default') {
        newComments.sort((a, b) => b.id - a.id)
    } else { 
        newComments.sort((a, b) =>b.time- a.time)
    }
    return (
      <ul className="comm-list">
         {newComments.map((item) => (
        <li className="comm-item" key={item.id}>
          <div
            className="avatar"
            style={{ backgroundImage: `url(${item.avatar})` }}
          ></div>
          <div className="info">
            <p className={`name ${item.vip ? 'vip' : ''}`}>
              {item.name}
              {item.vip && (
                <img
                  alt=""
                  src={
                    'https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png'
                  }
                />
              )}
            </p>
            <p className="time">
              <span>{formatTime(item.time)}</span>
              <span onClick={()=>props.changeCollet(item.id)}
                className={`iconfont icon-collect${item.collect ? '-sel' : ''}`}
              ></span>
              {item.name === props.user.name && (
                <span className="del" onClick={()=>props.delitem(item.id)}>删除</span>
              )}
            </p>
            <p>{item.content}</p>
          </div>
        </li>
      ))}
      </ul>
    )
  }
  
  export default CommentList