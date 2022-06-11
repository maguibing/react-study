import React, { Component } from 'react'
import CommentHead from './components/CommentHead'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
// import './index.css'

export default class App extends Component {
  render() {
    return (
      <div className="comments">
        {/* 输入框组件 */}
        <CommentInput />
        {/* 标题排序组件 */}
        <CommentHead />
        {/* 列表组件 */}
        <CommentList />
      </div>
    )
  }
}
