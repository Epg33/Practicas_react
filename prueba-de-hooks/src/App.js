import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Nav'
import Lazy from './lazy/Index'
import Memo from './memo/Index'
import UseCallback from './useCallback/Index'
import UseDebugValue from './useDebugValue/Index'
import UseDefferredValue from './useDeferredValue/Index'
import UseId from './useId/Index'
import UseImperativeHandle from './useImperativeHandle/Index'
import UseInsertionEffect from './useInsertionEffect/Index'
import UseLayoutEffect from './useLayoutEffect/Index'
import UseMemo from './useMemo/Index'
import UseSyncExtternalStore from './useSyncExternalStore/Index'
import UseTransition from './useTransition/Index'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<h1>Prueba de hooks</h1>}></Route>
          <Route path='/lazy' element={<Lazy />}></Route>
          <Route path='/memo' element={<Memo />}></Route>
          <Route path='/usecallback' element={<UseCallback />}></Route>
          <Route path='/usedebugvalue' element={<UseDebugValue />}></Route>
          <Route path='/usedefferredvalue' element={<UseDefferredValue />}></Route>
          <Route path='/useid' element={<UseId />}></Route>
          <Route path='/useimperativehandle' element={<UseImperativeHandle />}></Route>
          <Route path='/useinsertioneffect' element={<UseInsertionEffect />}></Route>
          <Route path='/uselayouteffect' element={<UseLayoutEffect />}></Route>
          <Route path='/usememo' element={<UseMemo />}></Route>
          <Route path='/usesyncexternalstore' element={<UseSyncExtternalStore />}></Route>
          <Route path='/usetransition' element={<UseTransition />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
