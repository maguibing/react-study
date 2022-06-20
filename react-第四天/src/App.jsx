import React, { Component } from 'react'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Head from './components/Head.jsx'
import './App.css'
import axios from 'axios'
axios.defaults.baseURL='http://localhost:5000'
export default class App extends Component {
    state = {
        todoList:[]
    }

    componentDidMount() {
        this.getTodoList()
    }
    
    getTodoList = async () => {
        const {data:todoList} = await axios.get("todos");
        this.setState({todoList})
    }

    updateTodo = async (id) => { 
        const item = this.state.todoList.find(v=>v.id===id)
        await axios({
            method: "put",
            url: `/todos/${id}`,
            data: {
                ...item,
                done:!item.done
            }
        })
        this.getTodoList()
    }


    del = async (id) => { 
        await axios({
            method: "delete",
            url: `/todos/${id}`,
        })
        this.getTodoList()
    }

    render () {
    const {todoList} = this.state
    return (
      <section className="todoapp">
        <Head getTodoList={ this.getTodoList.bind(this) } />
        <Main todoList={todoList} updateTodo={ this.updateTodo.bind(this) }  del={ this.del.bind(this) }/>
        <Footer />
      </section>
    )
  }
}
