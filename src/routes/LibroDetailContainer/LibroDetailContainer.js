import LibroDetail from "../../componentes/LibroDetail/LibroDetail";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Load from "../../componentes/loading/Load";



const LibroDetailContainer = () => {
    const [libros,  setLibros] = useState([]);
    const [load, setLoad] = useState(true)

    const {detalleId} = useParams()

     
    useEffect(() => {
        const db = getFirestore();
        const items = doc(db, 'libros', detalleId);
        getDoc(items).then(res => setLibros({id: res.id, ...res.data() }))
        setTimeout(() => {
            setLoad(false)
        }, 1000)
        
    }, [detalleId])   
    
    
    return(
        <>
        {load ? <div className="flexLoad"><Load /></div> : <LibroDetail libros={libros}/>}
        
        
        </>
        
    )
}



export default LibroDetailContainer;