import { NavLink } from 'react-router-dom';
import React from 'react'

function Nav() {
  return (
    <nav>
      <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/'>Pagina 1</NavLink>
      <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/pagina2'>Pagina 2</NavLink>
      <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/pagina3'>Pagina 3</NavLink>
      <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/pagina4/G'>Pagina 4</NavLink>
    </nav>
  )
}

export default Nav;