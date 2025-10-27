import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./componentes/navbar"; 
import Footer from "./componentes/Footer";
import Home from "./pasta/home";
import Servico from "./pasta/servico";
import Contato from "./componentes/contatos";
import { Navigate } from "react-router-dom";

function App() {
  return  ( 
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
           <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/servico" element={<Servico />} />
          <Route path="/contatos" element={<Contato />} />        
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;