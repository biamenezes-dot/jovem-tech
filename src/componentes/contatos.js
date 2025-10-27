import FormularioContato from "../componentes/FormularioContato";

function Contato() {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px", minHeight: "100vh", backgroundColor: "#f6f6f6" }}>
      <h1 style={{ color: "#130949ff", marginBottom: "20px" }}>Entre em Contato</h1>
      <p style={{ color: "#555", marginBottom: "40px" }}>
        Envie sua mensagem e retornarei o mais breve possível.
      </p>
      <FormularioContato />
    </div>
  );
}

export default Contato;
