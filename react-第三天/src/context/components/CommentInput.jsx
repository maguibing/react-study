const CommentInput = () => {
    return (
      <>
        <h3 className="comm-head">评论</h3>
        <div className="comm-input">
          <textarea placeholder="爱发评论的人，运气都很棒" >
          </textarea>
          <div className="foot">
              <div className="word">0/100</div>
              <div className="btn">发表评论</div>
          </div>
        </div>
      </>
    )
  }
  
  export default CommentInput