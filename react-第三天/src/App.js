import React from 'react'

export default class Child extends React.Component {
  state = {
    money: 1000,
  }

  increment = (price) => {
    this.setState({
      money: this.state.money - price,
    })
  }

  render() {
    const { money } = this.state
    return (
      <React.Fragment>
        <Parent money={money} increment={this.increment.bind(this)}></Parent>
        <Sass increment={this.increment.bind(this)}></Sass>
      </React.Fragment>
    )
  }
}

class Parent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="parent">
          <h1>{this.props.money}</h1>
          <button onClick={() => this.props.increment(500)}>increment</button>
        </div>
      </React.Fragment>
    )
  }
}

function Sass(props) {
  return (
    <React.Fragment>
      <button onClick={() => props.increment(100)}>decrement</button>
    </React.Fragment>
  )
}
