const CommentHead = (props) => {
    const updateActive = (active) => {
        if(active===props.active) return
        props.updateActive(active)
     }
    return (
      <h3 className="comm-head">
            热门评论<sub>({ props.length})</sub>
            <span className={`${props.active === 'default' ? 'active' : ''}`} onClick={ ()=>updateActive("default")}>默认</span>
        <span className={`${props.active==='time' ? 'active' : ''}`} onClick={ ()=>updateActive("time")}>时间</span>
      </h3>
    );
  };
  
  export default CommentHead;