import { useEffect, useState } from 'react'
import './App.css'
import Register from './Components/Register'
import ListPostCard from './Components/ListPostCard'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  const products = useSelector((state) => state.products)

  useEffect(() => {
    document.title = `Contador: ${count}`
  }, [count]) //Array de dependencias? 

  const isRegistered = false

  const onClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Bienvenidos</h1>
      <p>Contador: {count}</p>
      <button onClick={onClick}>CONTAR</button>
      <ListPostCard/>
      {isRegistered ? <Login /> : <Register />}
    </>
  )
}

export default App
