import OrdenLibros from "../OrdenLibros/OrdenLibros";
import {ListaLibros} from '../ItemLibros/ListaLibros';
import './Libros.css'

const Libros = () => {
    return(
        <div className="ListaLibros">
            {ListaLibros.map(({titulo, autor, points, image, id}) => <OrdenLibros key={id} titulo={titulo} autor={autor} points={points} image={image}/>)}
        </div>
    )
}

export default Libros;