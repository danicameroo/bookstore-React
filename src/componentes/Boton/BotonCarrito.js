import './BotonCarrito.css'



const BotonCarrito = ({onAdd}) => {


    return(
        <button type="button" className="btn btn-light Agregar" onClick={onAdd}><p className='font'>Agregar al carrito</p></button>
    )
}

export default BotonCarrito