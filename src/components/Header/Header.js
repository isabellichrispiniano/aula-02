import Logo from '../../image/bem-vindo.png'
import './header.css'


function Header(){
     return(
        <header className='header-menu'>
        <img src={Logo} className='img-logo'/>
          <h2>Bem vindo</h2>
        </header>       
     )
}

export default Header;