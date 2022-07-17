import './BotonCarrito.css'



const BotonAgregar = ({onAdd}) => {
    const handleclick = () => {
        onAdd()
    }

    return(
        <button type="button" class="btn btn-light" className="Agregar" onClick= {handleclick}><p className='font'>Agregar al carrito</p></button>
    )
}

export default BotonAgregar