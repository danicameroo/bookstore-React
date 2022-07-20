import './LibroDetail.css';
import ContadorTotal from '../LibroCount/ContadorTotal'; 

const LibroDetail = ({libros}) => {
    return(
        <div>
            <div className="flexBox">
                <div>
                    <img src={libros.image} className="ImgLibros" alt=""/>
                </div>
                <div className='Box caracters'>
                    <h1 className='font'>{libros.titulo}</h1>
                    <h3 className='font'>{libros.autor}</h3>
                    <h3 className='font'>{libros.points}</h3>
                    <h3 className='font'>{libros.genero}</h3>
                    <h3 className='font'>{libros.precio}$</h3>
                    <div className='contador'><ContadorTotal initial={1} stock={4} onAdd />
                </div>
                </div>
                <div className='Box'>
                    <h2 className='font'>Sinopsis</h2>
                    <p className='font'>{libros.sinopsis}</p>
                </div>                
            </div>
            <div>
                <h2 className='font caracters'>Libros Recomendados</h2>
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