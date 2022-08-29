

const BotonComprar = ({handlerClick, title}) => {
    return(
        <button className='botonCart' onClick={handlerClick}>{title}</button>
    )
}

export default BotonComprar