import Libros from "componentes/LibrosListContainer/Libros";
import { ListaLibros } from "./ListaLibros"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom';

const ItemLibros = () => {
    const [libros,  setLibros] = useState([]);
    const {categoriaId} = useParams();

    useEffect(() => {
        const promise = new Promise(function(resolve){
            setTimeout(() =>{
                resolve(ListaLibros)
            }, 1000)
        });
        if (categoriaId){
            promise.then(resolve => setLibros(resolve.filter(ListaLibros => ListaLibros.categoria === categoriaId))) 
        }else{
            promise.then(resolve => setLibros(resolve)) 
        }
        
    }, [categoriaId]) 
    
    
    return(
        <Libros libros={libros}/>
    )
}



export default ItemLibros;