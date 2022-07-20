import { ListaLibros } from "./ListaLibros"
import { useEffect, useState } from "react"
import Libros from "../LibrosListContainer/Libros";

const ItemLibros = () => {
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
        <Libros libros={libros}/>
    )
}



export default ItemLibros;