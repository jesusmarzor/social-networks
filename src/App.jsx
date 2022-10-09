import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Links } from './components/Links'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Links/>
    </div>
  )
}

export default App
