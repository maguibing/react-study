import React from 'react'

const hisContext = React.createContext(0)


export default class Parent extends React.Component { 
    state = {
        money:1000   
    }

    updateMoeny (value) { 
        this.setState({
            money: value
        })
    }

    render () { 
        return (
        <React.Fragment>
                    <h1>关键内容{ this.state.money}</h1>
            <hisContext.Provider value={{money:this.state.money, updateMoeny:this.updateMoeny.bind(this)}}>
                <Son></Son>
            </hisContext.Provider>
        </React.Fragment>
        )
    }
}

class Son extends React.Component{
    render () { 
        return (
            <div>
                <h1>儿子</h1>
                <GrandSon></GrandSon>
            </div>
        )
    }
}

class GrandSon extends React.Component{
    render () { 
        return (
            <hisContext.Consumer>
            {(value) => 
            (
                <div>
                    < h1 > 孙子:{value.money}</h1>
                    <button onClick={()=>value.updateMoeny(500)}> 修改金额 </button>
               </div>
            )
                   }
           </hisContext.Consumer>
        )
    }
}