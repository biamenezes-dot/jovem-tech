import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const styles = {
    nav: {
      backgroundColor: "#130949ff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },

    logo: {
      fontSize: "20px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
    },

    links: {
      display: "flex",
      gap: "40px",
    },

    link: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "bold",
      transition: "color 0.3s",
    },

    linkHover: {
      color: "#f5b301",
    },

    menuButton: {
      display: "none",
      fontSize: "26px",
      background: "none",
      border: "none",
      color: "#fff",
      cursor: "pointer",
    },

    // Estilos que serão aplicados em telas pequenas
    mobileLinks: {
      display: menuOpen ? "flex" : "none",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#130949ff",
      position: "absolute",
      top: "65px",
      left: 0,
      width: "100%",
      padding: "20px 0",
      gap: "20px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    },

    "@media (max-width: 768px)": {},
  };

  // Detecta se a tela é pequena
  const isMobile = window.innerWidth <= 768;

  return (
    <nav style={styles.nav}>

      <div style={styles.logo}>
        ⚖️ <span style={{ marginLeft: "8px" }}>Thamires Advogada</span>
      </div>

      {isMobile && (
        <button onClick={toggleMenu} style={styles.menuButton}>
          ☰
        </button>
      )}

      <div style={isMobile ? styles.mobileLinks : styles.links}>
        <Link to="/home" style={styles.link}>
          Home
        </Link>
        <Link to="/servico" style={styles.link}>
          Serviços
        </Link>
        <Link to="/contatos" style={styles.link}>
          Contato
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
