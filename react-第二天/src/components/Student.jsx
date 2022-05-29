import React from 'react'


// 查阅处理方法 https://zh-hans.reactjs.org/docs/handling-events.html#gatsby-focus-wrapper

class Student extends React.Component {
    state = {
        name: "zs",
        isActive:false,
        product: ["手机","电脑","手表"]
    }

    hanleClick = () => {
        // const {name,product } = this.state
        // console.log(name,product)
        this.setState({ isActive:!this.state.isActive})
    }

    render () {
        const { name,product} = this.state
        return (
            <div className="numContainer">
                <div>{ this.state.isActive ?name : "暂无" }</div>
                <ul>
                    {product.map(v => (<li key={v}>{ v }</li>))}
                </ul>
                <button onClick={this.hanleClick}>annuity</button>
            </div>
        )
    }
}

export default Student
