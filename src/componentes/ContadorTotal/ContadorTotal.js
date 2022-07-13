import { useState } from "react"
import IconPlus from "../icon/iconPlus"
import IconLess from "../icon/iconLess"
import './ContadorTotal.css'
import BotonCarrito from '../Boton/BotonCarrito'


const ContadorTotal = ({stock}) => {

    const [count, setCount] = useState(1)

    const less = () => {
        if(count === 1){
            console.log(count)
        }else{
            setCount(count - 1)
        }
    }
    const plus = () => {
        if(count === stock){
            console.log(count)
        }else{
            setCount(count + 1)
        }
    }

    const onAdd = () => {
        console.log(count)
    }

    return (
        <div className="BotonContenedor">
            <button className="BotonContador" onClick={less}><IconLess /></button>{count}
            <button className="BotonContador" onClick={plus}><IconPlus /></button>
            <BotonCarrito onAdd={onAdd}/>
        </div>
    )
}

export default ContadorTotal