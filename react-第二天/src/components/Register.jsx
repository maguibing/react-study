// 非受控组件

import {Component, createRef } from 'react'

export default class Register extends Component { 
    resgister = createRef()

    click = () => { 
        console.log(this.resgister.current.value)
    }

    render () { 
        return (
            <div>
                <input type="text" ref={this.resgister} />
                <button onClick={this.click}>按钮</button>
            </div>
        )
    }
} 