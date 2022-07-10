import './OrdenLibros.css'

const OrdenLibros = ({libro, image}) =>{
    return(
        <div>
            <ul className='Lista'>
                <li>
                    <div>{libro}</div>
                    <img src={image} className="ImgLibros" alt=""/>
                </li>     
            </ul>
        </div>
    )
}

export default OrdenLibros