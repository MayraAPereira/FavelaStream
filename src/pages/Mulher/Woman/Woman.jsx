import Cards from "../Cards/Cards"
import Nyvi from "../img/Nyvi.jpg"
import Thallita from "../img/thalitaxavier.png"
import Samira from "../img/samira.jpg"
import Twitch from "../img/twitch.png"
import Tiktok from "../img/tiktok.png"
import Facebook from "../img/facebook.png"

import './woman.css'

function Woman() {
    return (
       <>
         <div className="container-woman">
            <div className="div-container">
               <h2 className="woman-h2">
                “Sou mulher, isso é pra mim?”

               </h2>

                <p className="woman-p">
                Muitas mulheres querem entrar para o meio dos streams, mas sempre rola aquele receio de como 
                ela será recebida, se isso não será bobeira ou quais preconceitos terão que enfrentar para 
                poder estar naquele meio. 
                Mas, cada vez mais, estamos mudando essa visão e sim, nós podemos e vamos entrar para esse 
                mundo dos streams.
                </p> <br />
                <p className="woman-p">
                A pesquisa <a href="https://www.proxxima.com.br/home/proxxima/opiniao/2021/06/24/lugar-de-mulher-e-na-twitch.html" className="a-icones" target="_blank">
                Gamers Brasil 2021</a>, constatou que 51,5% do público de jogos 
                eletrônicos do país é feminino, com uma maior porcentagem feminina (62,2%) em jogos mobile. 
                Já nos consoles e computadores, a PGB 2021 mostra que a situação se inverte, sendo o público 
                masculino mais presente, representando 61,9% dos jogadores de consoles e 59,6% de PC. 
                </p> <br />
                <p className="woman-p">
                Na plataforma de Stream Twitch, apenas 3% dos mais bem pagos streamers são mulheres <a className="a-icones" href="https://forbes.com.br/forbes-tech/2022/04/mulheres-streamers-revelam-o-poder-feminino-nos-games/"> 
                segundo agência More Yellow SITE </a>, e dentre YouTube, Facebook e a própria Twitch, somente 
                5% dos principais streamers são mulheres. Este cenário é o mesmo dentro das empresas que 
                criam jogos, onde também, o protagonismo feminino dentro dos jogos é muito pequeno, sendo de 
                apenas 5%.
                </p> <br />
                <p className="woman-p">
                Mesmo com esses números, acredito que estamos evoluindo e podemos igualar este cenário em 
                alguns anos. Com isso deixo aqui três estilos de Streamers para você se espelhar a começar, 
                cada um com carreira e nichos diferentes.
                </p> <br />

                <Cards title="Nyvi" img={Nyvi} className="cards-woman"> 
                Nyvi Estephan é apresentadora de games e esportes eletrônicos
                eleita a maior Host da América Latina e 3ª do mundo segundo o <a className="a-icones" href="https://sportv.globo.com/site/e-sportv/noticia/esports-awards-2019-jogada-de-sexycake-e-eleita-melhor-do-ano-veja-principais-vencedores.ghtml" 
                target="_blank"> 
                 eSports Awards 2019 nos Estados Unidos.</a> 
                <a href="https://www.twitch.tv/nyviestephan" target="_blank" className="a-icones"> 
                <img className="container-icones" src={Twitch} alt="" />
                </a>
                 </Cards>

                <Cards title="Thallita Flor" img={Thallita}>
                Thallita Flor, atua. Faz graça. Espalha sabores. 
                É atriz e palhaça. E esculpe pratos, porque é cozinheira, das boas. Nascida e criada em áreas 
                suburbanas do Rio de Janeiro, hoje mora no município fluminense de Niterói, no Morro do 
                Caramujo, onde é dona e chef de cozinha do Banana Buffet, estabelecimento que serve comida 
                vegana nos eventos de que participa. 
                <a href="https://www.tiktok.com/@thallitaxavier" target="_blank" className="a-icones">
                <img className="container-icones" src={Tiktok} alt="" /></a>
                </Cards>

                <Cards title="Samira Close" img={Samira} > 
                Conhecida por mapear LGBTQIA+ no mercado de Games no Brasil, Samira Close é referência no segmento 
                com muito humor, carisma e profissionalismo! Seja para jogar, apresentar ou cantar, a drag queen 
                deixa a sua presença por onde passa. <a href="https://mynd8.com.br/squad/samira-close/" target="_blank" className="a-icones"> Fonte. </a> 
                <a href="https://www.fb.gg/samiraclose/" target="_blank" className="a-icones">
                <img className="container-icones" src={Facebook} alt="" /></a>
                </Cards>
                </div>
                
            </div>
       </>
    )
}
export default Woman