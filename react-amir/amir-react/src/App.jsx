// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  function onClick(event) {
    alert(event.target.innerHTML);
  }




  return (
    <div>
      <div onClick={onClick} >
        <h1>hello world!</h1>
      </div>
      <div onClick={onClick} >
        <h1>سلام دنیا!</h1>
      </div>
    </div>
  )
}

export default App
