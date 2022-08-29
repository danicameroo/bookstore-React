import './NavBar.css';
import Icon from '../../componentes/CartWidget/icon';
import {NavLink, Link} from 'react-router-dom';

function Nav(){
    return(
        <div className='Menu'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt14Io5tksYMy34uTYCfu3WbQ3aMS7kCcO_Q&usqp=CAU" className='ImgLogo' alt=''/>
            <h1 className='titulo'>BookStore</h1>
            <div>
                <ul className='categorias'>
                    <NavLink className='link' to='/'><li className='lista'>Todos</li></NavLink>
                    <NavLink className='link' to='/categoria/Terror'><li className='lista'>Terror</li></NavLink>
                    <NavLink className='link' to='/categoria/Romance'><li className='lista'>Romance</li></NavLink>
                    <NavLink className='link' to='/categoria/Comedia'><li className='lista'>Comedia</li></NavLink>
                    <NavLink className='link' to='/categoria/Autoayuda'><li className='lista'>Autoayuda</li></NavLink>
                </ul>
            </div>
            <Link to='/cart' className='link'><Icon /></Link>
        </div>
    );
};

export default Nav