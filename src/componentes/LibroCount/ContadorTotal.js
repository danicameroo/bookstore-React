import './ContadorTotal.css'
import  BotonCarrito from "componentes/Boton/BotonCarrito";
import IconPlus from "componentes/CardWidget/iconPlus"
import IconLess from "componentes/CardWidget/iconLess"
import { useState } from 'react'


const ContadorTotal = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    return (
        <div className="BotonContenedor">
            <button disabled={count <= initial} className="BotonContador" onClick={() => setCount(count - 1)}><IconLess /></button>{count}
            <button disabled={count >= stock} className="BotonContador" onClick={() => setCount(count + 1)}><IconPlus /></button>
            <BotonCarrito onAdd={onAdd}/>
        </div> 
    )
}

export default ContadorTotal