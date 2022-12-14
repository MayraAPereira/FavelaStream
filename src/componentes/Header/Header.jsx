
import './header.css'

function Header(props) {
    return(
        <div className='header'>
            <h1>{props.children}</h1>
            <img src={props.image} alt={props.descriptio} />  
        </div>
    )
}

export default Header