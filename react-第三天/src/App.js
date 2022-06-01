import React from 'react'

export default class Child extends React.Component {
  state = {
    news: [{ a: 1 }, { a: 2 }, { a: 3 }],
  }
  render() {
    const { news } = this.state
    return (
      <React.Fragment>
        {news.map((v, i) => (
          <Parent key={i} />
        ))}
      </React.Fragment>
    )
  }
}

function Parent() {
  return (
    <React.Fragment>
      <div className="parent">
        <h1>今日要闻</h1>
        <div className="child">
          <h3>坚定不移走中国特色社会主义法治道路</h3>
          <div className="detail">
            <span>新华社</span>
            <span>774点赞</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
