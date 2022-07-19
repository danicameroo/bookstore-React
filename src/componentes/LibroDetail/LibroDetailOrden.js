


const LibroDetailOrden = ({titulo, autor, points, image}) =>{
    return(
        <div>
            <ul className='Lista'>
                <li>
                    
                    <img src={image} className="ImgLibros" alt=""/>
                    <p className='font'>{titulo}</p>
                    <p className='font'>{autor}</p>
                    <p className='font'>{points}</p>
                </li>     
            </ul>
        </div>
        )

}

export default LibroDetailOrden;