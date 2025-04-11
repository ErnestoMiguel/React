import './App.css';
import logo from './imagenes/logo192.png';
import { Boton } from './componentes/boton';
import { Contador } from './componentes/contador';
import { useState } from 'react';

function App() {
  const [cantClicks, setCantClicks] = useState(0);

  const manejarclic = () =>{
    setCantClicks(cantClicks+1);
  };

  const reiniciar = () =>{
    setCantClicks(0);
  };

  return (
    <div className="App">
      <div className='Contenedor-logo'>
        <img className='logo' src={logo} alt='logo de mi app'/>
      </div>
      <div className='contenedor-contador'>
        <Contador cantClicks={cantClicks}/>
        <Boton
          texto = 'click'
          botonclick={true}
          manejarclick={manejarclic}
        />
        <Boton
          texto= 'Reiniciar'
          botonclick={false}
          manejarclick={reiniciar}
        />
      </div>
    </div>
  );
}

export default App;
