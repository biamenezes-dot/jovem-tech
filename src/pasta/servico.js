const Servico = () => {
 
  const whatsappNumber = "5582991320458"; 
  const whatsappMessage = "Olá, gostaria de falar com Dr. Thamires!";
  const whatsappLink = 'https://wa.me/5582991320458?text=Olá,%20gostaria%20de%20falar%20com%20Dr.%20Thamires!';

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },

    hero: {
      backgroundImage: "url('https://images.unsplash.com/photo-1589391886645-d51941baf7f7?auto=format&fit=crop&w=1400&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "120px 20px",
      textAlign: "center",
      color: "#fff",
    },

    heroOverlay: {
      backgroundColor: "#130949ff",
      padding: "100px 300px",
      borderRadius: "8px",
      display: "inline-block",
    },

    heroTitle: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "20px",
    },

    heroText: {
      fontSize: "18px",
      maxWidth: "600px",
      margin: "0 auto 30px",
      lineHeight: "1.6",
    },

    button: {
      backgroundColor: "#f5b301",
      color: "#000",
      padding: "12px 30px",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "none",
    },

    areas: {
      padding: "80px 20px",
      textAlign: "center",
      backgroundColor: "#f8f8f8",
    },

    title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "40px",
      color: "#130949ff",
    },

    cards: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
    },

    card: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px #130949ff",
      maxWidth: "300px",
      textAlign: "left",
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
  };

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Defendendo seus direitos com ética e dedicação</h1>
          <p style={styles.heroText}>
            A Dra. Thamires oferece atendimento personalizado, buscando sempre as melhores soluções jurídicas para cada cliente.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={styles.button}>
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
              Atendimento humanizado em casos de divórcio, guarda, pensão alimentícia e reconhecimento de paternidade.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Direito Trabalhista</h3>
            <p style={styles.cardText}>
              Defesa dos direitos do trabalhador e do empregador, com foco em soluções justas e eficazes.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Direito Previdenciário</h3>
            <p style={styles.cardText}>
              Auxílio em aposentadorias, pensões e benefícios do INSS, com acompanhamento completo do processo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servico;