import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import FacaVoce from '../pages/FacaVoce/Facavoce'
import Mulher from '../pages/Mulher/Mulher'
import Contato from '../pages/Contato/Contato'
import Menu from '../componentes/Menu/Menu'

function ApplicationRoutes() {
    return(
       <BrowserRouter>
        <Menu />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="facavoce" element={<FacaVoce />} />
            <Route path="mulher" element={<Mulher />} />
            <Route path="contato" element={<Contato />} />
         </Routes>
       </BrowserRouter>
    )
}
export default ApplicationRoutes