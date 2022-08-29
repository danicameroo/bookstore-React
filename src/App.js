import Cart from './routes/cart/Cart.js';
import CartProvider from './routes/CartContext/CartContext.js';
import ItemLibros from './routes/LibrosList/ItemLibros.js';
import LibroDetailContainer from './routes/LibroDetailContainer/LibroDetailContainer.js';
import Nav from './routes/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Final from './routes/Final/Final.js';

function App() {
  return <>
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<ItemLibros />} />
          <Route path='/categoria/:categoriaId' element={<ItemLibros />} />
          <Route path='/detalle/:detalleId' element={<LibroDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/final' element={<Final />}/>
        </Routes>
      </CartProvider>  
    </BrowserRouter>
    </>;
    
}


export default App;