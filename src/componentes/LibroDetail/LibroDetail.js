import { ListaLibros } from "../ItemLibros/ListaLibros"
import LibroDetailOrden from "./LibroDetailOrden"

const LibroDetail = () => {
    return(
        <div>
            {ListaLibros.filter(libros => libros.id === 1).map(filteredLibros => (
                <div>
                    <LibroDetailOrden key={filteredLibros.id} titulo={filteredLibros.titulo} autor={filteredLibros.autor} points={filteredLibros.points} image={filteredLibros.image}/>
                </div>
            ))}
        </div>
    )
}


export default LibroDetail