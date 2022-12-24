
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Skills from './components/Skills';
import About from '../src/components/About';
import Topbar from './components/Topbar';
import Contact from './components/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
       <Topbar/>
      <Routes>
  
      <Route path="/" element={<Home/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App