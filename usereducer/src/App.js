import Calendario from './Calendario'
import Compra from './Compra';
import CompraB from './CompraB';

function App() {
  return (
    <>
      <h1>Prueba useReducer</h1>
      <Calendario />
      <h1>Actividad del useReducer</h1>
      <Compra />
      <hr/>
      <CompraB />
    </>
  );
}

export default App;
