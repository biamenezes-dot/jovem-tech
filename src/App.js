import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./componentes/navbar"; 
import Home from "./pasta/home";
import Servico from "./pasta/servico";
import FormularioContato from "./componentes/FormularioContato";

function App() {
  return  ( 
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/servico" element={<Servico />} />
          <Route path="./componentes/FormularioContato" element={<FormularioContato />} />        
        </Routes>
      </div>
       <FormularioContato />
    </Router>
  );
}

export default App;