import './App.css'
import propTypes from 'prop-types'
App.propTypes = {
  arr: propTypes.array,
}
function App(props) {
  const arr = props.array
  return (
    <div className="App">
      <ul>
        {arr.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
