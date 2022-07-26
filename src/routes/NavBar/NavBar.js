import './NavBar.css';
import Icon from 'componentes/CardWidget/icon';
import {NavLink} from 'react-router-dom';

function Nav(){
    return(
        <div className='Menu'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt14Io5tksYMy34uTYCfu3WbQ3aMS7kCcO_Q&usqp=CAU" className='ImgLogo' alt=''/>
            <h1 className='titulo'>BookStore</h1>
            <div>
                <ul className='categorias'>
                    <NavLink to='/'><li className='lista'>Todos</li></NavLink>
                    <NavLink to='/categoria/terror'><li className='lista'>Terror</li></NavLink>
                    <NavLink to='/categoria/romance'><li className='lista'>Romance</li></NavLink>
                    <NavLink to='/categoria/Comedia'><li className='lista'>Comedia</li></NavLink>
                    <NavLink to='/categoria/autoayuda'><li className='lista'>Autoayuda</li></NavLink>
                </ul>
            </div>
            <Icon />
        </div>
    );
};

export default Nav