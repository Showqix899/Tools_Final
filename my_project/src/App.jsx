import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First_Page from './Components/First_Page'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className='w-full flex h-full flex-wrap '>
      <First_Page/>
      </div>
    </>
  )
}

export default App
