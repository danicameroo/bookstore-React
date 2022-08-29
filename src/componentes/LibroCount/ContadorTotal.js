import './ContadorTotal.css'
import BotonCarrito from '../Boton/BotonCarrito';
import IconPlus from '../CartWidget/iconPlus';
import IconLess from '../CartWidget/iconLess';
import { useState } from 'react'


const ContadorTotal = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    return (
        <div className="BotonContenedor">
            <button disabled={count <= initial} className="BotonContador" onClick={() => setCount(count - 1)}><IconLess /></button>{count}
            <button disabled={count >= stock} className="BotonContador" onClick={() => setCount(count + 1)}><IconPlus /></button>
            <BotonCarrito onAdd={() => onAdd(count)}/>
        </div> 
    )
}

export default ContadorTotal