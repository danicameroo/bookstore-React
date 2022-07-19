import { useState } from "react"
import IconPlus from "../icon/iconPlus"
import IconLess from "../icon/iconLess"
import './ContadorTotal.css'
import BotonCarrito from '../Boton/BotonCarrito'


const ContadorTotal = ({stock, initial}) => {

    const [count, setCount] = useState(initial)

    const less = () => {
        setCount(count - 1);
    };

    const plus = () => {
        setCount(count + 1);
    };

    const onAdd = () => {
        console.log(count)
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