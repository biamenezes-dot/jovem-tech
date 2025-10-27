import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const whatsappLink =
    "https://wa.me/5582991320458?text=Olá,%20gostaria%20de%20falar%20com%20a%20Dra.%20Thamires!";

  const styles = {
    footer: {
      background: "linear-gradient(180deg, #130949ff, #080433)",
      color: "#fff",
      padding: "50px 20px 25px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "40px",
    },
    section: {
      flex: "1 1 250px",
      textAlign: "left",
      minWidth: "220px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#f5b301",
      marginBottom: "15px",
      borderBottom: "2px solid #f5b301",
      display: "inline-block",
      paddingBottom: "5px",
    },
    text: {
      fontSize: "15px",
      lineHeight: "1.7",
    },
    link: {
      color: "#f5b301",
      textDecoration: "none",
      fontWeight: "bold",
    },
    whatsappBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#25d366",
      color: "#fff",
      padding: "10px 22px",
      borderRadius: "8px",
      fontWeight: "bold",
      textDecoration: "none",
      transition: "0.3s",
      marginTop: "10px",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
      marginTop: "15px",
    },
    icon: {
      fontSize: "26px",
      color: "#f5b301",
      textDecoration: "none",
      transition: "0.3s",
    },
    iconHover: {
      color: "#fff",
    },
    copyright: {
      marginTop: "40px",
      fontSize: "13px",
      opacity: 0.8,
      borderTop: "1px solid rgba(255,255,255,0.2)",
      paddingTop: "15px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.section}>
          <h3 style={styles.title}>📍 Contato</h3>
          <p style={styles.text}>
            <strong>Endereço:</strong> Av. Santos Dumont, 1750 — Coroa do Meio, Aracaju-SE, 49035-785 <br />
            <strong>E-mail:</strong>{" "}
            <a href="mailto:contato@thamiresadvocacia.com" style={styles.link}>
              contato@thamiresadvocacia.com
            </a>
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.title}>⚖️ Atendimento</h3>
          <p style={styles.text}>
            Segunda a Sexta: 8h às 18h <br />
            Sábados: 8h às 12h
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappBtn}
          >
            <FaWhatsapp /> Falar no WhatsApp
          </a>
        </div>

       
        <div style={styles.section}>
          <h3 style={styles.title}>🌐 Redes Sociais</h3>
          <div style={styles.socialIcons}>
            <a
              href="https://www.instagram.com/thamires.adv"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.icon}
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.icon}
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.icon}
              title="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <p style={styles.copyright}>
        © {new Date().getFullYear()} Thamires Advocacia — Todos os direitos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
