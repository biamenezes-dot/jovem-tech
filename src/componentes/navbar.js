import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/home" style={styles.link}>Home</Link>
      <Link to="/servico" style={styles.link}>Serviço</Link>
      <Link to="/contato" style={styles.link}>Contato</Link>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#282c34",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    color: "#61dafb",
    textDecoration: "none",
    fontSize: "18px",
  }
};

export default Navbar;