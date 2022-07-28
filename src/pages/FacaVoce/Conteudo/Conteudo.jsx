import imagemStream from '../img/glossy-gaming.png'
import './conteudo.css'

function Conteudo() {
    return (
        <div className='conteudo'>
            <div className='div-conteudo'>
                <h2 className='h2'>Faça Você Mesmo!!!</h2>

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

                <p className='p-conteudo'>
                    Se você possui internet e um celular, um PC ou um console(video game),
                    você já possui uma plataforma para streamar,
                    pois esses são os únicos itens necessários para um stream.
                    <a href="https://www.youtube.com/watch?v=E4-ncjl_A3M" target="_blank">link</a>
                </p>
                <p className='p-conteudo'>
                    <u>Os próximos passos são os periféricos opcionais para a entrega do conteúdo:</u>
                </p> <br />
                <h3 className='h3-conteudo'>Áudio - Captação e Entrega de voz </h3>
                <p className='p-conteudo'>
                    Você pode utilizar aquele fone básico do celular mesmo, que já possui o microfone integrado,
                    ou optar por algo mais profissional como um headset, ou ainda caixas de som e microfones
                    condensadores como os utilizados em podcasts.
                </p><br />
                <h3>Captação de Vídeo </h3>
                <p className='p-conteudo'>
                    A captação de vídeo pode ser feita pela câmera do seu celular, (tanto a traseira como a frontal),
                    por uma webcam integrada ou mesmo por uma câmera profissional posicionada externamente.

                </p><br />
                <h2>
                    Celular 
                </h2>
                <br />
                <h4>
                    Grande parte da população possui celular hoje em dia, e com ele existe a facilidade de podermos stremar.
                </h4>
                <p className='p-conteudo'>
                    Celulares já possuem microfone, saída de áudio e câmera. O tipo de experiência que
                    você entregará para o usuário é opcional, partindo dos tipos de periféricos que você queira utilizar ou não
                    (microfone externo, headset, etc).
                </p>
                <p className='p-conteudo'>
                    No celular existem vários apps que você pode streamar, como Twitch, irltv, stream yard.
                </p> <br />
                <h2>
                    PC ou Notebook
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
                <h2>
                Console
                </h2> 

                <p className='p-conteudo'>
                
                </p>
                <p>
                    Aqui eu deixo mais alguns vídeos para ajudar vocês <a href="https://www.youtube.com/watch?v=aw2wOnFtx84">  
                    dica </a> de console com PC e ainda ele explica um pouco de OBS <a href="https://www.youtube.com/c/EscolaparaStreamers"> Aqui também</a>
                </p>
            </div>
        </div>
    )
}

export default Conteudo