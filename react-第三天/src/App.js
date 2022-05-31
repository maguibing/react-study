import React from 'react'

// 函数组件的基本使用
export default function Son(props) {
  return (
    <React.Fragment>
      <div>
        {props.name} {'123'}
      </div>
      <hr />
      <Child name="劳务" age="12312"></Child>
    </React.Fragment>
  )
}

class Child extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span>{this.props.name}</span>
      </React.Fragment>
    )
  }
}
