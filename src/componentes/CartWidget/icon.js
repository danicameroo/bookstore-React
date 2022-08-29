import '../CartWidget/icon.css'
import { useCartContext } from '../../routes/CartContext/CartContext'; 
import { BsFillBasket3Fill } from "react-icons/bs";

function Icon (){
    const {ProductoTotal} = useCartContext();

    return(
        <>
        <div className="FlexCart">
            <div className='circulo'><p className='Absoluto'>{ProductoTotal() || '0'}</p></div>
            <BsFillBasket3Fill className='iconoCart'/>
        </div>
        </>
    )
}

export default Icon