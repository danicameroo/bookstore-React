import ItemLibros from './routes/LibrosList/ItemLibros.js';
import LibroDetailContainer from './routes/LibroDetailContainer/LibroDetailContainer.js';
import Nav from './routes/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<ItemLibros />}></Route>
        <Route path='/categoria/:categoriaId' element={<ItemLibros />}></Route>
        <Route path='/detalle/:detalleId' element={<LibroDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
    </>;
    
}


export default App;
