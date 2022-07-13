import './BotonCarrito.css'



const BotonAgregar = ({onAdd}) => {
    const handleclick = () => {
        onAdd()
    }

    return(
        <button className="Agregar" onClick= {handleclick}>Agregar al carrito</button>
    )
}

export default BotonAgregar