import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  const toggleMenu = () => setMenuOpen(!menuOpen);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

    // botão visível no mobile
    menuButton: {
      display: isMobile ? "block" : "none",
      fontSize: "28px",
      background: "none",
      border: "none",
      color: "#fff",
      cursor: "pointer",
    },

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
      zIndex: 2000,
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        ⚖️ <span style={{ marginLeft: "8px" }}>Thamires Advogada</span>
      </div>

      <button onClick={toggleMenu} style={styles.menuButton}>
        ☰
      </button>

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
