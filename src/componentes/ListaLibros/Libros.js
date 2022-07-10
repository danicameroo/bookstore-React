import OrdenLibros from "../OrdenLibros/OrdenLibros";
import {ListaLibros} from './ListaLibros';
import './Libros.css'

const Libros = () => {
    return(
        <div className="ListaLibros">
            {ListaLibros.map(({libro, image, id}) => <OrdenLibros key={id} libro={libro} image={image}/>)}
        </div>
    )
}

export default Libros;