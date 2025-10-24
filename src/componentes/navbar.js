import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        ⚖️ <span style={{ marginLeft: "8px" }}>Thamires Advogada</span>
      </div>
      <div style={styles.links}>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/servico" style={styles.link}>Serviços</Link>
        <Link to="../componentes/FormularioContato" style={styles.link}>Contato</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#130949ff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 60px",
    color: "#fff",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "40px",
  },

};

export default Navbar;