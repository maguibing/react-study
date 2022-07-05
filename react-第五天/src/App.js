import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
// import UseHello from './components/useHello.jsx'
import { CartHeader } from './components/CartHeader'
import { CartFooter } from './components/CartFooter'
import { GoodsItem } from './components/GoodsItem'

import axios from 'axios'
import { useState, useEffect } from 'react'
const http = axios.create({
  baseURL: 'http://localhost:8888',
})

function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    const getList = async () => {
      const { data } = await http('/goodsList')
      setList(data)
    }
    getList()
  }, [])
  return (
    <div className="App">
      <CartHeader>购物车</CartHeader>
      {list.map((v, i) => (
        <GoodsItem key={i} {...v} />
      ))}
      <CartFooter />
    </div>
  )
}

export default App
