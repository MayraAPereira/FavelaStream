import imagemStream from '../img/glossy-gaming.png'
import celular from '../img/fone.png'
import pc from '../img/pc.png'
import console from '../img/console.svg'

import './conteudo.css'

function Conteudo() {
    return (
        <div className='conteudo'>
            <div className='div-conteudo'>
                <h2 className='primeiro-h2'>Faça Você Mesmo!!!</h2>

                <div className='div-p'>
                    <img src={imagemStream} alt="ilustração" className='img-conteudo' />
                    <p className='texto'>
                        Se você possui internet e um celular, um PC ou um console(video game), você já possui uma
                        plataforma para streamar, pois esses são os únicos itens necessários para um stream.
                    </p>
                </div>
                
                <h2 className='h2-conteudo'>

                    Lógico que eu não iria deixar vocês sem umas dicas de por onde começar, então vamos lá:

                </h2>
                
                <h3 className='h3-conteudo'>

                    <u>Os próximos passos são os periféricos opcionais para a entrega do conteúdo:</u>

                </h3> <br />

                <div className='conteudos-h3'>
                <h3>
                    Áudio - Captação e Entrega de voz 
                </h3>

                <p className='p-conteudo'>
                    Você pode utilizar aquele fone básico do celular mesmo, que já possui o microfone integrado,
                    ou optar por algo mais profissional como um headset, ou ainda caixas de som e microfones
                    condensadores como os utilizados em podcasts.
                </p><br />

                <h3>
                    Captação de Vídeo 
                </h3>

                <p className='p-conteudo'>
                    A captação de vídeo pode ser feita pela câmera do seu celular, (tanto a traseira como a frontal),
                    por uma webcam integrada ou mesmo por uma câmera profissional posicionada externamente.

                </p>
                </div>
                <br />

                <h2 className='h2-icone'>
                    Celular <br />
                    <img src={celular} alt="" className='imagem-icon' />

                </h2>

                <br />
                <h4>
                    Grande parte da população possui celular hoje em dia, e com ele existe a facilidade de podermos stremar.
                </h4> <br />
                <p className='p-conteudo'>
                    Celulares já possuem microfone, saída de áudio e câmera. O tipo de experiência que
                    você entregará para o usuário é opcional, partindo dos tipos de periféricos que você queira utilizar ou não
                    (microfone externo, headset, etc).
                </p>
                <p className='p-conteudo'>
                    No celular existem vários apps que você pode streamar, como Twitch, irltv, stream yard.
                </p> <br />
                <h2 className='h2-icone'>
                    PC ou Notebook <br />
                    <img src={pc} alt="" className='imagem-icon'/>

                </h2> <br />
                <p className='p-conteudo'>
                Pelo PC ou Notebook você consegue transmitir em várias plataformas: 
                
                <ul className='lista' type="circle">
                    <li>
                    youtube
                    </li>
                    <li>
                    facebook
                    </li>
                    <li>
                    twitch entre outras.
                    </li>
                </ul>
                A maioria dos notebooks já possuem periféricos de captação de áudio e vídeo integrados, 
                não sendo o caso do PC, é necessário escolher quais equipamentos adquirir, lembrando ainda 
                que é totalmente possível streamar sem uma câmera ou microfone, tudo irá depender do tipo de 
                conteúdo que você pretende apresentar. 
                </p><br />
                <h2 className='h2-icone'>
                Console <br />
                <img src={console} alt="" className='imagem-icon' />
                </h2> 

                <p className='p-conteudo'>
                Com o console você pode compartilhar a sua tela baixando aplicativos de stream, na própria 
                loja de aplicativos do console. Você pode adicionar periféricos próprios para o console como 
                por exemplo câmera e microfones externos ou também a possibilidade de conectar a conta 
                utilizada pelo aplicativo de stream em um pc e/ou celular para aumentar as possibilidades de 
                entrega do conteúdo.

                </p>
                <br />
                <h3 className='conteudo-h3'>
                    Aqui estão alguns vídeos para ajudar vocês com dica 
                </h3>
                
                <ul className='lista' type="circle">
                        <li>
                           <a className='lista-link' href="https://www.youtube.com/watch?v=-__7JHIhmAk">
                           Celular</a>
                        </li>
                        <li>
                           <a className='lista-link' href="https://www.youtube.com/watch?v=4yPM3h6apag">
                           PC/Notebook </a> 
                        </li>
                        <li>
                           <a className='lista-link' href="https://www.youtube.com/watch?v=uHmKCopt1yo">
                           Console</a> 
                        </li>
                        <li>
                            <a className='lista-link' href="https://www.youtube.com/watch?v=F4arIybP6XA">
                            Celular com PC/Notebook
                            </a>
                        </li>
                        </ul>
            </div>
        </div>
    )
}

export default Conteudo