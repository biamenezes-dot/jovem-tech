import foto from "../assets/ADV.png";

function Home() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "40px",
      backgroundColor: "#f6f6f6",
      padding: "60px 30px",
      minHeight: "100vh",
      boxSizing: "border-box",
    },
    image: {
      width: "100%",
      maxWidth: "350px",
      height: "auto",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
      flexShrink: 0,
    },
    textArea: {
      maxWidth: "700px",
      color: "#555",
      fontSize: "1rem",
      lineHeight: "1.7",
      textAlign: "justify",
    },
    title: {
      fontSize: "2.8rem",
      color: "#2d2d2d",
      fontWeight: "bold",
      marginBottom: "25px",
      fontFamily: "Georgia, serif",
      textAlign: "left",
    },
    videoSection: {
      textAlign: "center",
      backgroundColor: "#f6f6f6",
      padding: "60px 20px",
    },
    videoTitle: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#2d2d2d",
      marginBottom: "30px",
      fontFamily: "Georgia, serif",
    },
    iframe: {
      width: "100%",
      maxWidth: "800px",
      height: "450px",
      border: "none",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <img src={foto} alt="Foto de perfil" style={styles.image} />

        <div style={styles.textArea}>
          <h1 style={styles.title}>Apresentação</h1>
          <p>
            Sou Thamires, advogada comprometida com a defesa dos direitos e a
            busca por soluções jurídicas eficazes e humanas. Atuo com ética,
            empatia e dedicação, sempre priorizando o melhor resultado para cada
            cliente.
          </p>
          <p>
            Minha missão é tornar o Direito acessível e compreensível,
            oferecendo um atendimento personalizado e transparente em todas as
            etapas do processo. Acredito que cada caso é único e merece atenção
            especial, por isso trabalho com foco na escuta, no respeito e na
            confiança mútua.
          </p>
          <p>
            Com experiência em (áreas de atuação, ex: Direito Civil, Trabalhista
            e Previdenciário), procuro unir conhecimento técnico e sensibilidade
            para garantir justiça e segurança jurídica aos meus clientes.
          </p>
        </div>
      </div>

    
      <div style={styles.videoSection}>
        <h2 style={styles.videoTitle}>Nosso Escritório</h2>
        <iframe
          style={styles.iframe}
          src="https://www.youtube.com/embed/ZXaRMBk-_KI?si=H78qT1r4Cjoe-gi0"
          title="Nosso Escritório 360º"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Home;
