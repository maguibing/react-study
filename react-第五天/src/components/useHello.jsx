import { useState } from 'react'

const Hooks = () => {
    const [age, setAge] = useState(0)
    const [name, setName] = useState("张三")
    const [goal, changeTarget] = useState({ name: "", age: 18 })
    
    const updateTarget = () => { 
        changeTarget({ ...goal, name:"王老五" })
    }
    // 只要组件渲染更新就会执行  只会执行一次 不传值的话
    // useEffect(() => {
    //     setAge(age+1)
    //     // 提供书写副作用代码的空间
    // },[])

    return <>
    <h1>{age}</h1>
    <button onClick={()=>setAge(age+1)}>修改年龄+1</button>
    <button onClick={()=>setAge(age-1)}>修改年龄-1</button>
    <h1>{name}</h1>
    <button onClick={() => setName("李四")}>修改名称</button>
    <h1>{goal.name}----{  goal.age}</h1>
    <button onClick={updateTarget}>修改名称</button>
    </>
}

export default Hooks