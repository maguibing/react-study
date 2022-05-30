// 受控组件
import React from 'react'
// import ReactDom from 'react-dom/client'
export default class Login extends React.Component { 

    state = {
        mobile: "15979973954",
        checked:true
    }

    change = (e,string) => {
        this.setState({
            mobile:e.target.value
        })
     }

    checked = (e) => { 
        this.setState({
            checked: !this.state.checked
        })
    }
    
    render () {
        const { mobile,checked } = this.state
        
        return (
            <div className='container'>
                <input type="text" value={mobile} onChange={this.change} />
                <input type="checkbox" name="check" id="check" checked={checked} onChange={ this.checked} />
                <label htmlFor="check">是否同意</label>
                <span>{ mobile}</span>                    
            </div>
        )
    }
}