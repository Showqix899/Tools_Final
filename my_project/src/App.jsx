import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First_Page from './Components/First_Page'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navigation from './Components/Navigation'
import Drawing from './Components/Drawing'
import Music from './Components/Music'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Navigation/>

      <Router>
        <Routes>
          <Route path = "" element={<First_Page/>}/>
          <Route path = "music/" element={<Music/>}/>
          <Route path = "drawing/" element={<Drawing/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
