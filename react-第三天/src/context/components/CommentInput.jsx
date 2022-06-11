import {  Component } from 'react'

class CommentInput extends Component  {
    state = {
        content:""
    }

    setContent = (content) => { 
        if(content.length>=100) return alert("超出了字数限制")
        this.setState({ content })
    }

    render () { 
        return (
            <>
              <h3 className="comm-head">评论</h3>
              <div className="comm-input">
                    <textarea placeholder="爱发评论的人，运气都很棒" value={this.state.content} onChange={(e)=> this.setContent(e.target.value) }>
                </textarea>
                <div className="foot">
                        <div className="word">{ this.state.content.length}/100</div>
                        <div className="btn" onClick={() => { 
                            this.props.updateComments(this.state.content)
                            this.setState({content:""})
                        }}>发表评论</div>
                </div>
              </div>
            </>
          )
    }
  }
  
  export default CommentInput