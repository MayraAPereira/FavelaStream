import imagemCapa from '../img/design.png'
import './about.css'

function About() {
    return (
        <>
            <div className='about'>
                <div className='about-image'>
                    <img
                        className='profile-image'
                        src={imagemCapa}
                        alt="Imagem" />
                </div>
                <div className='about-text'>
                    <p> Favela Streamer é um site para ensinar e incentivar as pessoas que gostariam de compartilhar seus 
                        conhecimentos com outras pessoas, porque hoje uma grande parte da população, mesmo que de favela, 
                        está com o celular o dia todo ao seu lado, então porque não transmitir suas ideias e habilidades com 
                        as outras pessoas. 
                        Queremos saber o que você sabe fazer, o que você gosta de jogar. 
                    </p>
                    <p>    
                        A ideia inicial do Favela Streamer era criar um local físico para tirar a molecada da rua e colocá-los 
                        para se divertirem streamando com outras crianças e fazendo novas amizades, mas lógico eles teriam que mostrar 
                        uma boa nota e uma frequência de presença na escola, sendo essa a condição para eles poderem se divertir no 
                        mínimo uma hora por dia. Também com a possibilidade de ensinar jovens e adultos para aprender a compartilhar 
                        seus conhecimentos via stream neste local. 
                    </p>
                    <p>
                        Porém essa ideia ficou para um futuro distante pois precisa de investimento, então decidi fazer esse site, 
                        para ensinar a todos que acham que não podem streamar porque não tem um equipamento profissional. <br />
                        Na aba <a href="/facavoce">faça você mesmo</a> informo os equipamentos necessários para um stream desde o mais 
                        básico até o profissional, 
                        e algumas das plataformas disponíveis para streamar, como um passo a passo para incluir a todos. 
                        Espero com isso poder te auxiliar a entrar no mundo do stream e qualquer dúvida e sugestões, a aba de <a href="/contato">contatos </a> 
                        está disponível para te ajudar. 
                    </p>
                    <br />
                    <h3>E aí Favela, bora Streamar!?</h3>
                </div>
            </div>
        </>
    )
}

export default About
