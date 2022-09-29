import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
          <NavLink to='/usecallback'>useCallback</NavLink>
          <NavLink to='/usedebugvalue'>useDebugValue</NavLink>
          <NavLink to='/usedefferredvalue'>useDeferredValue</NavLink>
          <NavLink to='/useid'>useId</NavLink>
          <NavLink to='/useimperativehandle'>useImperativeHandle</NavLink>
          <NavLink to='/useinsertioneffect'>useInsertionEffect</NavLink>
          <NavLink to='/uselayouteffect'>useLayoutEffect</NavLink>
          <NavLink to='/usememo'>useMemo</NavLink>
          <NavLink to='/usesyncexternalstore'>useSyncExternalStore</NavLink>
          <NavLink to='/usetransition'>useTransition</NavLink>
      </nav>
    </>
  )
}

export default Nav