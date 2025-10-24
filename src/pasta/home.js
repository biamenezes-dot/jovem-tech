import foto from "../assets/ADV.png";

function Home() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      gap: "60px",
      backgroundColor: "#f6f6f6",
      padding: "80px 100px",
      minHeight: "100vh",
    },
    textArea: {
      maxWidth: "700px",
      color: "#555",
      fontSize: "18px",
      lineHeight: "1.7",
    },
    title: {
      fontSize: "52px",
      color: "#2d2d2d",
      fontWeight: "bold",
      marginBottom: "25px",
      fontFamily: "Georgia, serif",
    },
    image: {
      width: "350px",
      height: "auto",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    },
  };

  return (
    <div style={styles.container}>
      <img src={foto} alt="Foto de perfil" style={styles.image} />

      <div style={styles.textArea}>
        <h1 style={styles.title}>Apresentação</h1>
        <p>
          Sou Thamires, advogada comprometida com a defesa dos direitos e a busca por soluções jurídicas eficazes e humanas. Atuo com ética, empatia e dedicação, sempre priorizando o melhor resultado para cada cliente.
        </p>
        <p>Minha missão é tornar o Direito acessível e compreensível, oferecendo um atendimento personalizado e transparente em todas as etapas do processo. Acredito que cada caso é único e merece atenção especial, por isso trabalho com foco na escuta, no respeito e na confiança mútua.</p>
        <p>Com experiência em (áreas de atuação, ex: Direito Civil, Trabalhista e Previdenciário), procuro unir conhecimento técnico e sensibilidade para garantir justiça e segurança jurídica aos meus clientes.</p>
      </div>
    </div>
  );
}

export default Home;