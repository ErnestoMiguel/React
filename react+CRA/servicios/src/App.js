import './App.css';
import {Servicios} from './componentes/Servicios';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Nuestros Servicios</h1>
        <Servicios
          imagen='uñas.jpg'
          desfot0='foto de manicurista'
          nombre='Aliana'
          servicios='Manicura, Pedicura, Podologia '
          descripcion='Prestamos servicios de manos y pies aplicando tecnicas tradicionales y modernas, siempre buscando la satisfaccion del cliente.'
        />
        <Servicios
          imagen='masajes.jpg'
          desfot0='foto de manicurista'
          nombre='Aliana'
          servicios='Manicura, Pedicura, Podologia '
          descripcion='Prestamos servicios de manos y pies aplicando tecnicas tradicionales y modernas, siempre buscando la satisfaccion del cliente.'
        />
        <Servicios
          imagen='pedicura.jpg'
          desfot0='foto de manicurista'
          nombre='Aliana'
          servicios='Manicura, Pedicura, Podologia '
          descripcion='Prestamos servicios de manos y pies aplicando tecnicas tradicionales y modernas, siempre buscando la satisfaccion del cliente.'
        />
      </div>
      
    </div>
  );
}

export default App;
