import './OrdenLibros.css'
import ContadorTotal from '../ContadorTotal/ContadorTotal'

const OrdenLibros = ({libro, image}) =>{
    return(
        <div>
            <ul className='Lista'>
                <li>
                    <div>{libro}</div>
                    <img src={image} className="ImgLibros" alt=""/>
                    <ContadorTotal stock={4}/>
                </li>     
            </ul>
        </div>
    )
}

export default OrdenLibros