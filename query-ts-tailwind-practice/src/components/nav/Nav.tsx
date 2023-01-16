import { NavLink } from "react-router-dom"

export interface NavComponent { }

const Nav:React.FC<NavComponent> = ():JSX.Element => {
  return (
    <>
      <nav className="w-full flex items-center justify-evenly bg-slate-900 text-slate-100">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/random'>Random</NavLink>
        <NavLink to='/gif'>Gif</NavLink>
        <NavLink to='/searchgif'>Search Gifs</NavLink>
        <NavLink to='/stickerslist'>Stickers</NavLink>
      </nav>
    </>
  )
}

export default Nav