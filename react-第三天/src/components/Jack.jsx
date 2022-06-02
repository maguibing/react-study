import React, { Component } from 'react';

export default class Jack extends Component {
  say = () => {
    // 修改数据
    this.props.changeMsg('you jump i look');
  };
  render() {
    return (
      <div>
        <h3>我是Jack组件</h3>
        <button onClick={this.say}>说</button>
      </div>
    );
  }
}