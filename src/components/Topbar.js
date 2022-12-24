import React from 'react'
import { Link } from 'react-router-dom'


function Topbar() {
  return (
    <nav className="navbar navbar-expand navbar-light sticky-top ">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/home'}>Portfo<span className="text-light">lio</span></Link>
   
    
      <ul className="navbar-nav me-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/skills'}>Skill</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/contact'}>Contact</Link>
        </li>
        
      </ul>
      
    </div>
  
</nav>


        
  )
}

export default Topbar