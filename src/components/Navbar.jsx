import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate= useNavigate()
  return (
    <nav>
        <button onClick={ () => navigate(-1)}>Atrás</button>
        <Link to='/'><h3>Home</h3></Link>        
        <Link to='/contacto'><h3>Contacto</h3></Link>
        <Link to='/beer'><h3>Información Cerveza</h3></Link>  
    </nav>
  )
}

export default Navbar