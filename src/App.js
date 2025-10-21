import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./componentes/navbar"; 
import Home from "./pasta/home";
import Contato from "./pasta/contato";
import Servico from "./pasta/servico";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/servico" element={<Servico />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;