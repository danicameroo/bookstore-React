import './NavBar.css';

function Nav(){
    return(
        <div className='Menu'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt14Io5tksYMy34uTYCfu3WbQ3aMS7kCcO_Q&usqp=CAU"/>
            <h1 className='titulo'>BookStore</h1>
            <div>
                <ul className='categorias'>
                    <a href="" className='lista'><li>Todos</li></a>
                    <a href="" className='lista'><li>Terror</li></a>
                    <a href="" className='lista'><li>Romance</li></a>
                    <a href="" className='lista'><li>Comedia</li></a>
                    <a href="" className='lista'><li>Autoayuda</li></a>
                </ul>
            </div>
        </div>
    );
};

export default Nav