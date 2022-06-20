import { Component, createRef } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'


export default class Head extends Component {
    input  = createRef()
    // 新增
    async keyDomn (e) { 
        if (e.keyCode === 13) { 
            let name = this.input.current.value.trim()
            if(!name) return alert("值不能为空")
            await axios({ method: "post",url:"todos", data: { name, done:false }})
            this.input.current.value = ""
            this.props.getTodoList()
        }
    }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
        ref={this.input}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={this.keyDomn.bind(this)}
        />
      </header>
    )
  }
}

Head.propTypes = {
    getTodoList:PropTypes.func.isRequired
}
