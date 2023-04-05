import Cabecalho from "components/Cabecalho";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "components/Footer";
import Container from "components/Container";

function AppRoutes(){
    return (
        <BrowserRouter>
        <Cabecalho/>
            <Container>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/favoritos" element={<Favoritos/>}></Route>
            </Routes>
            </Container>
        <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes