import linkedin from '../img/linkedin.png'
import ask from '../img/teddy-bear.png'
import git from '../img/github.png'

import './inf.css'

function Informacao() {
  return (
    <>
      <div className="div-contato">
        <h2 className='contato-h2'>
          -"Tenho dúvida" <br />

        </h2>
        <h3 className='contato-h3'>
          -"Não consegui"
        </h3>
        <h4 className='contato-h4'>
          -"Li e não endendi nada"
        </h4 >
        <div className='contatos-redes'>

          <p className='contatos-p'>
            Se você ainda possui duvida, ou quiser conversar comigo vou deixar meu um <a href="https://forms.gle/RYWyu5CqWKmkYqrm7" target="_blank">
              link para o forms </a> e meu e-mail  
          </p>
          <p className='e-mail'> mayaparecidapereira@gmail.com </p>
          <div className='contatos-icons'>
            <a href="https://github.com/MayraAPereira" target="_blank">
              <img src={git} alt="" className='img-contatos' />
            </a>
            <a href="https://www.linkedin.com/in/mayra-pereira-aa886214a/" target="_blank">
              <img src={linkedin} className='img-contatos' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Informacao