import React from 'react'
import ReactDom from 'react-dom'

function Header() {
  return (
    <React.Fragment>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </React.Fragment>
  )
}

ReactDom.render(Header(), document.querySelector('#root'))
