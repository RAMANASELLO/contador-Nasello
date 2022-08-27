import logo from '../../logo.svg'
import './styles.css'

const NavBar= () => {
    return(
        <div className='navbar-container'>
            <div>
                <img width={'100px'} src={logo} alt="logo"/> 
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>

            <div>
                <button>Login</button>
            </div>

        </div>

    )
}

export default NavBar 