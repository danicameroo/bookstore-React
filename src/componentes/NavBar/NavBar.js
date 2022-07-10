import './NavBar.css';
import Icon from '../icon/icon';

function Nav(){
    return(
        <div className='Menu'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt14Io5tksYMy34uTYCfu3WbQ3aMS7kCcO_Q&usqp=CAU" className='ImgLogo' alt=''/>
            <h1 className='titulo'>BookStore</h1>
            <div>
                <ul className='categorias'>
                    <li className='lista'>Todos</li>
                    <li className='lista'>Terror</li>
                    <li className='lista'>Romance</li>
                    <li className='lista'>Comedia</li>
                    <li className='lista'>Autoayuda</li>
                </ul>
            </div>
            <Icon />
        </div>
    );
};

export default Nav