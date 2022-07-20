import './OrdenLibros.css'
import ContadorTotal from '../LibroCount/ContadorTotal'

const OrdenLibros = ({titulo, autor, points, image}) =>{
    return(
        <div>
            <ul className='Lista'>
                <li>
                    <img src={image} className="ImgLibros" alt=""/>
                    <p className='font'>{titulo}</p>
                    <p className='font'>{autor}</p>
                    <p className='font'>{points}</p>
                    <div><ContadorTotal initial={1} stock={4} onAdd/></div>
                </li>     
            </ul>
        </div>
        )

}

export default OrdenLibros