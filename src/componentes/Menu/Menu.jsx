import { Link } from 'react-router-dom'

import './menu.css'

function Menu() {
    return(
        <ul className='menu'>
            <li className='item'>
              <Link className='link' to="/">Home</Link>
            </li>
            <li className='item'>
              <Link className='link' to="/facavoce">Faça Você Mesmo</Link>
            </li>
            <li className='item'>
              <Link className='link' to="/mulher">Mulher</Link>
            </li>
            <li className='item'>
              <Link className='link' to="/contato">Contato</Link>
            </li>
        </ul>
    )
}

export default Menu