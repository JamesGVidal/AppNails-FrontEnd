import { BrowserRouter, Route, Routes } from 'react-router';
import { Agendar } from './pages/Agendar';
import { Componentes } from './pages/Componentes';
import { Entrar } from './pages/Entrar';
import { EntrarCodigo } from './pages/EntrarCodigo';
import { Home } from './pages/Home';
import { MinhasUnhas } from './pages/MinhasUnhas';
import { Painel } from './pages/Painel';
import { Provar } from './pages/Provar';

function App() {

    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/agendar" element={<Agendar />}/>
            <Route path="/provar" element={<Provar />}/>
            <Route path="/minhas-unhas" element={<MinhasUnhas />}/>
            <Route path="/painel" element={<Painel />}/>
            <Route path="/entrar" element={<Entrar />}/>
            <Route path="/entrar/codigo" element={<EntrarCodigo />}/>
            <Route path="/_componentes" element={<Componentes />}/>
          </Routes>
        </BrowserRouter>
    )
}

export default App
