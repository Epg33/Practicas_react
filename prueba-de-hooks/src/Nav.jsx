import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <>
      <nav className='hooksNav'>
          <NavLink className='hooksLinks' to='/usecallback'>useCallback</NavLink>
          <NavLink className='hooksLinks' to='/usedebugvalue'>useDebugValue</NavLink>
          <NavLink className='hooksLinks' to='/usedefferredvalue'>useDeferredValue</NavLink>
          <NavLink className='hooksLinks' to='/useid'>useId</NavLink>
          <NavLink className='hooksLinks' to='/useimperativehandle'>useImperativeHandle</NavLink>
          <NavLink className='hooksLinks' to='/useinsertioneffect'>useInsertionEffect</NavLink>
          <NavLink className='hooksLinks' to='/uselayouteffect'>useLayoutEffect</NavLink>
          <NavLink className='hooksLinks' to='/usememo'>useMemo</NavLink>
          <NavLink className='hooksLinks' to='/usesyncexternalstore'>useSyncExternalStore</NavLink>
          <NavLink className='hooksLinks' to='/usetransition'>useTransition</NavLink>
      </nav>
    </>
  )
}

export default Nav