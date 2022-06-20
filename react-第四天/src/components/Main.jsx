import PropTypes from 'prop-types'
const Main = ({todoList,updateTodo,del}) => { 
    return <>
    <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
            { todoList.map(v=>(<li key={v.id} className={v.done?'completed':""}>
                <div className="view">
                <input className="toggle" type="checkbox" checked={v.done} onChange={()=>updateTodo(v.id)} />
                <label>{v.name}</label>
                <button className="destroy" onClick={()=>del(v.id)}></button>
                </div>
                <input className="edit" value="Create a TodoMVC template" /> 
            </li>))}
        </ul>
      </section>
    </>
}

// 参数校验
Main.protoTypes = {
    todoList: PropTypes.array.isRequired,
    getTodoList:PropTypes.func.isRequired
    
}

export default Main