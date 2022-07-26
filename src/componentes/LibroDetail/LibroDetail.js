import './LibroDetail.css';
import ContadorTotal from '../LibroCount/ContadorTotal'; 

const LibroDetail = ({libros}) => {
    return(
        <div key={libros.id}>
            <div className="flexBox">
                <div>
                    <img src={libros.image} className="ImgLibro" alt=""/>
                </div>
                <div className='Box caracters'>
                    <h1 className='font'>{libros.titulo}</h1>
                    <p className='fontParrafo'>Autor: <strong>{libros.autor}</strong></p>
                    <p className='fontParrafo'>Editorial: <strong>{libros.editorial}</strong></p>
                    <p className='fontParrafo'>Año de edicion: <strong>{libros.año}</strong></p>
                    <p className='fontParrafo'>Numero de paginas: <strong>{libros.paginas}</strong></p>
                    <p className='fontParrafo'>Categoria: <strong>{libros.categoria}</strong></p>
                    <p className='fontParrafo'><strong>{libros.points}</strong></p>
                    <h2 className='fontPrecio'>{libros.precio}$</h2>
                    <div className='contador'><ContadorTotal initial={1} stock={4} onAdd />
                </div>
                </div>
                <div className='Box'>
                    <h2 className='font'>Sinopsis</h2>
                    <p className='font'>{libros.sinopsis}</p>
                </div>                
            </div>
            <div>
                <h2 className='fontRecomendados caracters'>Libros Recomendados</h2>
                <div className='imgFlex'>
                    <div>
                        <img src="https://trabalibros.com/rs/13480/4886d523-1977-4fa1-ab24-df1b609c897c/5bd/filename/h401304.jpg" className="ImgRecomendados" alt=""/>
                        <h3 className='font caracters'>Mujercitas</h3>
                    </div>
                    <div>
                        <img src="https://2.bp.blogspot.com/--cShYTc6GuI/WqZiklfN0RI/AAAAAAAAFNM/P1-0oLhRq7kZUzn_hYXlRkxxva05RxUwQCLcBGAs/s1600/6393bb33133412dc166e2ff41c090b73.jpg" className="ImgRecomendados" alt=""/>
                        <h3 className='font caracters'>Llamame por<br/>tu nombre</h3>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51LwumI2B3L.jpg" className="ImgRecomendados" alt=""/>
                        <h3 className='font'>El cuaderno de noah</h3>
                    </div>
                    <div>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/81MPsv1q0AL.jpg" className="ImgRecomendados" alt=""/>
                        <h3 className='font'>Cumbres Borrascosas</h3>
                    </div>
                </div>    
            </div>    
        </div>
        )
}


export default LibroDetail