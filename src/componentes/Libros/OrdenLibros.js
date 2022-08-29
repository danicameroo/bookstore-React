import './OrdenLibros.css'
import { Link } from 'react-router-dom'


const OrdenLibros = ({info}) =>{
    return(
                <li>
                <Link to={`/detalle/${info.id}`}><img src={info.imagen} className="ImgLibros" alt=""/></Link>
                    <p className='font catalogoText'>{info.titulo}</p>
                    <p className='font catalogoText'>{info.autor}</p>
                    <p className='font catalogoText'>{info.precio}$</p>
                </li>
        )

}

export default OrdenLibros