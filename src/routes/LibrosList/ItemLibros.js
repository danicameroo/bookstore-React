import Libros from "../../componentes/LibrosListContainer/Libros";
import { useEffect, useState } from "react"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import {useParams} from 'react-router-dom';
import Load from "../../componentes/loading/Load";
import '../../routes/LibrosList/ItemLibros.css'

const ItemLibros = () => {
    const [libros,  setLibros] = useState([]);
    const [load, setLoad] = useState(true);
    const {categoriaId} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "libros");
        
        if (categoriaId){
            const itemsFilter = query(itemsCollection, where('categoria', '==', categoriaId))
            getDocs(itemsFilter).then(snapshot => {
                const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
                setLibros(data);
            })
        }else{
            getDocs(itemsCollection).then(snapshot => {
                const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
                setLibros(data);
            }) 
        }

        setTimeout(() => {
            setLoad(false)
        }, 1000)
        
    }, [categoriaId]) 
    
    
    return(
        <>
        {load ? <div className="flexLoad"><Load /> </div>: <Libros libros={libros}/>}
        </>
    )
}



export default ItemLibros;