import React from 'react'

const myContext = React.createContext(0)


export default class Parent extends React.Component { 
    render () { 
        return (
        <React.Fragment>
        <myContext.Provider>
            <h1>关键内容</h1>
        </myContext.Provider>
        </React.Fragment>
        )
    }
}