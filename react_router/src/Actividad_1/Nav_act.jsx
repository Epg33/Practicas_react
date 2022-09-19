import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav_act() {
  return (
    <nav>
        <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/Page'>Home</NavLink>
        <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/rey/Atanagildo'>Atanagildo</NavLink>
        <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/rey/Ataulfo'>Ataulfo</NavLink>
        <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/rey/Ervigio'>Ervigio</NavLink>
        <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/rey/Leogivildo'>Leogivildo</NavLink>
        <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/rey/Recisvinto'>Recisvinto</NavLink>
        <NavLink className={
        ({isActive })=>(isActive ? 'activado'
        : null
        )} to='/rey/Sisebuto'>Sisebuto</NavLink>
    </nav>
  )
}

export default Nav_act;