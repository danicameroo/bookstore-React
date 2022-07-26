import './ContadorTotal.css'
import BotonCarrito from 'componentes/Boton/BotonCarrito'
import IconPlus from "componentes/CardWidget/iconPlus"
import IconLess from "componentes/CardWidget/iconLess"
import { useState } from "react"


const ContadorTotal = ({stock, initial}) => {

    const [count, setCount] = useState(initial)

    const less = () => {
        setCount(count - 1);
    };

    const plus = () => {
        setCount(count + 1);
    };

    const onAdd = () => {
        alert("se agregaron " + count)
    }

    return (
        <div className="BotonContenedor">
            <button disabled={count <= 1} className="BotonContador" onClick={less}><IconLess /></button>{count}
            <button disabled={count >= stock} className="BotonContador" onClick={plus}><IconPlus /></button>
            <BotonCarrito onAdd={onAdd}/>
        </div>
    )
}

export default ContadorTotal