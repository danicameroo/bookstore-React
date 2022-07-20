import { useEffect, useState } from "react"
import LibroDetail from "../LibroDetail/LibroDetail";

const Item = {titulo: "Orgullo y prejuicio", autor: "Jane Austen", points: "9/10", genero: "Romance", image:"https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/625452ebb0e15e764981b44c_6034d7d1f3e0f55fcab2b2de_Orgullo-y-prejuicio-jane-austen-editorial-alma.jpeg", precio: 30.50, "sinopsis": "Satírica, antirromántica, profunda y mordaz a un tiempo, la obra de Jane Austen nace de la observación de la vida doméstica y de un profundo conocimiento de la condición humana. Con la llegada del señor Darcy a su región, las vidas de los Bennet y sus cinco hijas se vuelven del revés. El orgullo y la distancia social, la astucia y la hipocresía, los malentendidos y los juicios apresurados abocan a los personajes al escándalo y al dolor, pero también a la comprensión, el conocimiento y el amor verdadero. Orgullo y prejuicio ha fascinado a generaciones de lectores por sus inolvidables personajes y su desopilante retrato de una sociedad, la Inglaterra victoriana y rural, tan contradictoria como absurda."};

const LibroDetailContainer = () => {
    const [libros,  setLibros] = useState([]);

    useEffect(() => {
        const promise = new Promise(function(resolve){
            setTimeout(() =>{
                resolve(Item)
            }, 3000)
        })

        promise.then(resolve => setLibros(resolve)) 
        
    }, []) 
    
    
    return(
        <LibroDetail libros={libros}/>
    )
}



export default LibroDetailContainer;