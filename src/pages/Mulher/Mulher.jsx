import Header from "../../componentes/Header/Header"
import Footer from "../../componentes/Footer/Footer"
import Imagem from "../Mulher/img/Woman.png"
import Woman from "./Woman/Woman"


function Mulher() {
    return(
       <>
        <Header 
        image={Imagem}
        description=''>
           Girl Power, com força total!!!
            
        </Header>
        <Woman />
        <Footer />

       </>
    )
}
export default Mulher