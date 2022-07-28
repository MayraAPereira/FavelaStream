import Header from "../../componentes/Header/Header"
import Footer from "../../componentes/Footer/Footer"
import image from "../Mulher/img/Woman.png"
import Woman from "./Woman/Woman"


function Mulher() {
    return(
       <>
        <Header 
        image={image}
        description=''>
           Girl Power, com força total!!!
            
        </Header>
        <Woman />
        <Footer />

       </>
    )
}
export default Mulher