import React from 'react'
import ReactDom from 'react-dom/client'
import Student from './components/Student'

function Header() {
  return (
    <React.StrictMode>
      <Student />
    </React.StrictMode>
  )
}

ReactDom.createRoot(document.querySelector('#root')).render(Header())
