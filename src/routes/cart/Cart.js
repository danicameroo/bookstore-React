import '../../routes/cart/Cart.css'
import CarritoDetail from '../../componentes/CarritoDetail/CarritoDetail';
import { useCartContext } from '../CartContext/CartContext'; 
import { getFirestore, collection, addDoc} from "firebase/firestore";
import { useState } from 'react';
import {Link} from 'react-router-dom'
import BotonComprar from '../../componentes/Boton/BotonComprar';


const Cart = () =>{

    const {cart, PrecioTotal} = useCartContext();

    const [form, setForm] = useState({
        name: "",
        email: ""
    });


    const changeHandler = (ev) => {
        const {value, name} = ev.target;
        setForm({...form, [name]: value});
    }

    const orden = {
        comprador: form,
        items: cart,
        total: PrecioTotal(),
    }
     
    const handlerClick = () => {
        const db = getFirestore();
        const ordenCollection = collection(db, "orden");
        addDoc(ordenCollection, orden)
        .then(({id}) => console.log(id))

        console.log(orden)
        
    }

    if (cart.length === 0){
        return(
            <div className='flexAgg'>
                <div>
                    <h1 className='fontAgg'>No hay nada agregado</h1>
                </div>
                <div>
                    <img className='imgAgg' src='https://img.freepik.com/vector-premium/libro-texto-llorando-libro-infantil-cara-literatura-triste-ilustracion-vector-icono-personaje-lindo-dibujos-animados-aislado-sobre-fondo-blanco_81894-5305.jpg' alt=''/>
                </div>
                <div>
                    <Link to='/'><BotonComprar title={'Agregar un libro'}/></Link>
                </div>
            </div>
        )
    }

    return (
        <>
            {cart.map(product => <CarritoDetail key={product.id} product={product}/>)}
            <div className='flexCart'>
                <h2 className='fontCart'>Finaliza tu compra</h2>
                <form>
                    <div>
                        <input className='Form' placeholder=" Nombre Completo" name="name" id="name" value={form.name} onChange={changeHandler} required/>
                    </div>
                    <div>
                        <input className='Form' placeholder=" Correo Electronico" type="email" name="email" id="email" value={form.email} onChange={changeHandler} required/>
                    </div>
                </form>
            </div>
            <div className="Total">
                <h3 className="font">Total: {PrecioTotal()}$</h3>
                <Link to='/final'><BotonComprar title={'Comprar'} onClick={handlerClick()}/></Link>
            </div>
        </>
        
    )

}

export default Cart