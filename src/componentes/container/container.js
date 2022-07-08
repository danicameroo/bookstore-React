import "./container.css"

function Container (){
    return(
        <div>
            <ul className="ListaLibros">
                <li><div>Libro 2: Misery</div><img src="https://elgeneracionalpost.com/wp-content/uploads/2020/06/misery-stephen-king.jpg" className="ImgLibros"></img></li>
                <li><div>Libro 1: Orgullo y prejuicio</div><img src="https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/625452ebb0e15e764981b44c_6034d7d1f3e0f55fcab2b2de_Orgullo-y-prejuicio-jane-austen-editorial-alma.jpeg" className="ImgLibros"></img></li>    
                <li><div>Libro 4: Maldito karma</div><img src="https://www.planetadelibros.com/usuaris/libros/fotos/14/m_libros/13239_1_maldito_karma-9788432228582.jpg" className="ImgLibros"></img></li>
                <li><div>Libro 3: El monje que vendio su ferrari</div><img src="http://1.bp.blogspot.com/-CQAPPblijA8/UtQOFRe0LXI/AAAAAAAABkU/7P3o0OWHpPE/s1600/resumen-libro-el-monje-que-vendio-su-ferrari-resena-ensayo-opinion-robin-sharma.jpg" className="ImgLibros"></img></li>     
            </ul>
        </div>
    )
}

export default Container