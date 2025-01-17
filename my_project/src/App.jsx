import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import First_Page from './Components/First_Page';
import NavBar from './Components/NavBar';
import Drawing from './Components/Drawing';
import Music from './Components/Music';
import Comedy from './Components/Comedy';

function App() {
  return (
    <Router>
      <NavBar />
      <nav className="bg-gray-100 p-4">
        <ul className="flex w-[full] justify-center gap-[60px] items-center">
          <li>
            <button><NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'font-bold border p-2 rounded-lg bg-red-600 text-white' : ' bg-gray-400 border text-black p-2 rounded-lg')}
            >
              ALL
            </NavLink></button>
          </li>
          <li>
            <NavLink
              to="/music"
              className={({ isActive }) => (isActive ? 'font-bold border p-2 rounded-lg bg-red-600 text-white' : ' bg-gray-400 border text-black p-2 rounded-lg')}
            >
              Music
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/drawing"
              className={({ isActive }) => (isActive ? 'font-bold border p-2 rounded-lg bg-red-600 text-white' : ' bg-gray-400 border text-black p-2 rounded-lg')}
            >
              Drawing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comedy"
              className={({ isActive }) => (isActive ? 'font-bold border p-2 rounded-lg bg-red-600 text-white' : ' bg-gray-400 border text-black p-2 rounded-lg')}
            >
              Comedy
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<First_Page />} />
        <Route path="/music" element={<Music />} />
        <Route path="/drawing" element={<Drawing />} />
        <Route path="/comedy" element ={<Comedy/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
