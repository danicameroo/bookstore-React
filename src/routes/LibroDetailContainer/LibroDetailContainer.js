import LibroDetail from "componentes/LibroDetail/LibroDetail";
import { ListaLibros } from "../LibrosList/ListaLibros";
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom';



const LibroDetailContainer = () => {
    const [libros,  setLibros] = useState([]);

    const {detalleId} = useParams()

    useEffect(() => {
        const promise = new Promise(function(resolve){
            setTimeout(() =>{
                resolve(ListaLibros)
            }, 1000)
        });
       
        promise.then(resolve => setLibros(resolve.find(ListaLibros => ListaLibros.id === detalleId )))
        
    }, [detalleId]) 
    
    
    return(
        <LibroDetail libros={libros}/>
    )
}



export default LibroDetailContainer;