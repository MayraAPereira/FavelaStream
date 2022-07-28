import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import './inf.css'

function Informacao() {
  return (
    <>
    <div className="div-informacao">
      <div className='informacao'>
      <h2>
        Tem dúvida, não consegui, li e não endendi nada, então bora conversar!
        </h2>
      </div>
      
      <p>
        Se você ainda possui duvida, ou quiser conversar comigo vou deixar um <a href="https://forms.gle/RYWyu5CqWKmkYqrm7">AQUI</a>
        um link para direcionar direitinho 
      </p>
        <div className='div-icons'>
        <a href="https://www.instagram.com/maypontinho/">
          <img src={instagram} alt="" className='img' />
        </a>
        <a href="https://www.linkedin.com/in/mayra-pereira-aa886214a/">
          <img src={linkedin} alt="" className='img' />
        </a>
        </div>
        <a href="https://www.youtube.com/watch?v=E4-ncjl_A3M" target="_blank">Link</a>
      
    </div>
    </>
  )
}
export default Informacao