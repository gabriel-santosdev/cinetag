import Cabecalho from "components/Cabecalho";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "components/Footer";
import Container from "components/Container";
import FavoritosProvider from "contextos/Favoritos";

function AppRoutes(){
    return (
        <BrowserRouter>
        <Cabecalho/>
            <Container>
            <FavoritosProvider>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/favoritos" element={<Favoritos/>}></Route>
            </Routes>
            </FavoritosProvider>
            </Container>
        <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes