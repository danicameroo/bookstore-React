import './Libros.css'
import OrdenLibros from '../Libros/OrdenLibros';

const Libros = ({libros}) => {
    return(
        <ul className="Lista flexBoxCatalogo">
            {libros.map(ListaLibros => <OrdenLibros key={ListaLibros.id} info={ListaLibros}/>)}
        </ul>
    )
}

export default Libros;