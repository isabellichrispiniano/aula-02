import './footer.css'
import Casa1 from '../../image/casa1.jpg'
import Casa2 from '../../image/casa2.jpg'

function Footer(){
    return(
      <footer className='footer-menu'>
         <h1>Escolha a casa que mais combina com você</h1>
         <img src={Casa1} className='img-casa1'/>
         <img src={Casa2} className='img-casa2' />

      </footer>
    )
}

export default Footer