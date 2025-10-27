const Servico = () => {
  const whatsappLink =
    "https://wa.me/5582991320458?text=Olá,%20gostaria%20de%20falar%20com%20Dr.%20Thamires!";

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      overflowX: "hidden",
    },

    hero: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1589391886645-d51941baf7f7?auto=format&fit=crop&w=1400&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "120px 20px",
      textAlign: "center",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    heroOverlay: {
      backgroundColor: "rgba(19, 9, 73, 0.9)",
      padding: "60px 40px",
      borderRadius: "8px",
      maxWidth: "900px",
      width: "100%",
      boxSizing: "border-box",
    },

    heroTitle: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
    },

    heroText: {
      fontSize: "1.1rem",
      maxWidth: "600px",
      margin: "0 auto 30px",
      lineHeight: "1.6",
    },

    button: {
      backgroundColor: "#f5b301",
      color: "#000",
      padding: "14px 32px",
      border: "none",
      borderRadius: "6px",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
      transition: "transform 0.2s ease, background-color 0.2s ease",
    },

    areas: {
      padding: "80px 20px",
      textAlign: "center",
      backgroundColor: "#f8f8f8",
    },

    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "40px",
      color: "#130949ff",
    },

    cards: {
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      gap: "30px",
      flexWrap: "wrap",
    },

    card: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(19, 9, 73, 0.3)",
      maxWidth: "300px",
      minWidth: "250px",
      flex: "1 1 280px",
      textAlign: "left",
      transition: "transform 0.3s ease",
    },

    cardHover: {
      transform: "scale(1.05)",
    },

    cardTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#130949",
    },

    cardText: {
      fontSize: "15px",
      lineHeight: "1.5",
      color: "#130949ff",
    },

    "@media (maxWidth: 768px)": {
      heroTitle: { fontSize: "2rem" },
      heroText: { fontSize: "1rem" },
      title: { fontSize: "1.6rem" },
    },
  };

  return (
    <div style={styles.container}>
   
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Defendendo seus direitos com ética e dedicação
          </h1>
          <p style={styles.heroText}>
            A Dra. Thamires oferece atendimento personalizado, buscando sempre
            as melhores soluções jurídicas para cada cliente.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Fale com a advogada
          </a>
        </div>
      </section>
      
      <section style={styles.areas}>
        <h2 style={styles.title}>Áreas de Atuação</h2>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Direito de Família</h3>
            <p style={styles.cardText}>
              Atendimento humanizado em casos de divórcio, guarda, pensão
              alimentícia e reconhecimento de paternidade.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Direito Trabalhista</h3>
            <p style={styles.cardText}>
              Defesa dos direitos do trabalhador e do empregador, com foco em
              soluções justas e eficazes.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Direito Previdenciário</h3>
            <p style={styles.cardText}>
              Auxílio em aposentadorias, pensões e benefícios do INSS, com
              acompanhamento completo do processo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servico;
