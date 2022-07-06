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
  const [checkAll, setCheckAll] = useState(false)

  // 选中单间商品
  const changeGoodsState = async (id, goods_state) => {
    const newGoods = list.map((v) => {
      if (v.id === id) return { ...v, goods_state }
      return v
    })
    setList([...newGoods])
    setCheckAll(newGoods.every((item) => item.goods_state))
    await http.patch(`/goodsList/${id}`, {
      goods_state,
    })
  }

  const changeCheckAll = async (checkAll) => {
    setCheckAll(checkAll)
    setList(
      list.map((v) => {
        return { ...v, goods_state: checkAll }
      }),
    )
    list.forEach((v) => {
      http.patch(`/goodsList/${v.id}`, { goods_state: checkAll })
    })
  }
  // 获取总数量
  const totalCount = list.reduce((prev, item) => {
    if (item.goods_state) {
      return (prev += item.goods_count)
    }
    return prev
  }, 0)
  // 获取总价格
  const totalPrice = list.reduce((prev, item) => {
    if (item.goods_state) {
      return (prev += item.goods_count * item.goods_price)
    }
    return prev
  }, 0)

  useEffect(() => {
    const getList = async () => {
      const { data } = await http('/goodsList')
      setList(data)
      setCheckAll(data.every((item) => item.goods_state))
    }
    getList()
  }, [])

  return (
    <div className="App">
      <CartHeader>购物车</CartHeader>
      {list.map((v, i) => (
        <GoodsItem key={v.id} {...v} changeGoodsState={changeGoodsState} />
      ))}
      <CartFooter
        checkAll={checkAll}
        totalCount={totalCount}
        totalPrice={totalPrice}
        changeCheckAll={changeCheckAll}
      />
    </div>
  )
}

export default App
