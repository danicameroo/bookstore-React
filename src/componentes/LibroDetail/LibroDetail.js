import './LibroDetail.css';
import ContadorTotal from '../LibroCount/ContadorTotal';
import { useCartContext } from '../../routes/CartContext/CartContext'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LibroDetail = ({libros, libro}) => {
    const [cart, setCart] = useState(false)

    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setCart(true)
        addProduct(libros, quantity)
    }

    return(
        <div key={libros.id}>
            <div className="flexBox">
                <div>
                    <img src={libros.imagen} className="ImgLibro" alt=""/>
                </div>
                <div className='Box caracters'>
                    <h1 className='font'>{libros.titulo}</h1>
                    <p className='fontParrafo'>Autor: <strong>{libros.autor}</strong></p>
                    <p className='fontParrafo'>Editorial: <strong>{libros.editorial}</strong></p>
                    <p className='fontParrafo'>Año de edicion: <strong>{libros.año}</strong></p>
                    <p className='fontParrafo'>Numero de paginas: <strong>{libros.paginas}</strong></p>
                    <p className='fontParrafo'>Categoria: <strong>{libros.categoria}</strong></p>
                    <p className='fontParrafo'><strong>{libros.points}</strong></p>
                    <p className='fontPrecio'>Quedan {libros.stock} en stock</p>
                    <h2 className='fontPrecio'>{libros.precio}$</h2>
                    <div className='contador'>
                        {
                            cart ? <div><Link to='/cart'><button className='boton'>Ver en carrito</button></Link><Link to='/'><button className='boton'>Ver mas libros</button></Link></div> : <ContadorTotal initial={1} stock={libros.stock} onAdd={onAdd}/>
                        }  
                    </div>
                </div>
                <div className='Box'>
                    <h2 className='font'>Sinopsis</h2>
                    <p className='font'>{libros.sinopsis}</p>
                </div>                
            </div>
            <div>
                <h2 className='fontRecomendados caracters'>Libros Recomendados</h2>
                <div className='imgFlex'>
                </div>    
            </div>
        </div>
    )
}


export default LibroDetail