import React from 'react'
import ReactDom from 'react-dom'
import Student from './components/Student'

function Header() {
  return (
    <React.StrictMode>
      <Student />
    </React.StrictMode>
  )
}

ReactDom.render(Header(), document.querySelector('#root'))
