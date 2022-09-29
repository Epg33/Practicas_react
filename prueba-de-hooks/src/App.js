import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UseCallback from './useCallback/index'
import UseDebugValue from './useDebugValue/index'
import UseDefferredValue from './useDeferredValue/index'
import UseId from './useId/index'
import UseImperativeHandle from './useImperativeHandle/index'
import UseInsertionEffect from './useInsertionEffect/index'
import UseLayoutEffect from './useLayoutEffect/index'
import UseMemo from './useMemo/index'
import UseSyncExtternalStore from './useSyncExternalStore'
import UseTransition from './useTransition/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
