import Header from "../../componentes/Header/Header"
import Footer from "../../componentes/Footer/Footer"
import About from "../Home/About/About"
import image from '../Home/img/Favela-Streamer.jpg'


function Home() {
    return(
      <>
      <Header image={image} descrition='Foto de um setup'>Favela Streamer</Header>
      <About />
      <Footer />
      </>
    )
}
export default Home