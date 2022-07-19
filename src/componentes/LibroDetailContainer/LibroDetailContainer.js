import { ListaLibros } from "../ItemLibros/ListaLibros"
import { useEffect, useState } from "react"
import LibroDetail from "../LibroDetail/LibroDetail";

const LibroDetailContainer = () => {
    const [libros,  setLibros] = useState([]);

    useEffect(() => {
        const promise = new Promise(function(resolve){
            setTimeout(() =>{
                resolve(ListaLibros)
            }, 3000)
        })

        promise.then(resolve => setLibros(resolve)) 
        
    }, []) 
    
    
    return(
        <LibroDetail libros={libros}/>
    )
}



export default LibroDetailContainer;