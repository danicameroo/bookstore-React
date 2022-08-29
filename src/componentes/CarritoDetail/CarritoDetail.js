import '../CarritoDetail/CarritoDetail.css'
import { useCartContext } from '../../routes/CartContext/CartContext';
import { BsFillTrashFill } from "react-icons/bs";


const CarritoDetail = ({ product}) => {
    const {Eliminar} = useCartContext();

    return (
        <>
        <div className="carritoDetail font">
            <div><img className="imgCarrito" src={product.imagen} alt=""></img></div>
            <div>
                <h4 className='widthMax'>{product.titulo}</h4>
                <p>{product.autor}</p>
                <p>{product.editorial}</p>
                <p>{product.año}</p>
            </div>
            <div>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio a pagar: {product.quantity * product.precio}$</p>
                < BsFillTrashFill onClick={() => Eliminar(product.id)}/>
            </div>
        </div>
        <hr className='Separador'></hr>
        </>
    )
}

export default CarritoDetail