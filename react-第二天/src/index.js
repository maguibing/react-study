import React from 'react'
import ReactDom from 'react-dom/client'
// import Student from './components/Student'
// import Login from './components/Login.jsx'
// import Register from './components/Register'
import Comment from './components/Comment'
function Header() {
  return (
    <React.StrictMode>
      <Comment />
    </React.StrictMode>
  )
}

ReactDom.createRoot(document.querySelector('#root')).render(Header())
