import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

function FormularioContato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null); // Guarda o valor do reCAPTCHA (token de verificação)

  const handleCaptchaChange = (value) => {
    console.log("Token do reCAPTCHA:", value);
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se o usuário confirmou o reCAPTCHA
    if (!captchaValue) {
      Swal.fire({
        title: 'Atenção!',
        text: 'Por favor, confirme que você não é um robô.',
        icon: 'warning',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#3085d6',
        background: '#f5f5f5',
      });
      return;
    }

    // Se passou pelo reCAPTCHA, exibe uma mensagem de sucesso
    Swal.fire({
      title: 'Enviado!',
      text: 'Seu formulário foi enviado com sucesso.',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#3085d6',
      background: '#f5f5f5',
    });

    // Limpa os campos
    setNome("");
    setEmail("");
    setMensagem("");
    setCaptchaValue(null);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <textarea
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
          style={styles.textarea}
        />

        <div style={styles.captcha}>
          <ReCAPTCHA
            sitekey="6LfhA_YrAAAAAKUlb4nXnn8mCfo_aEsMJ5ed6CWi"
            onChange={handleCaptchaChange}
          />
        </div>

        <button type="submit" style={styles.botao}>
          Enviar
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    background: "#f7f7f7",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  titulo: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  captcha: {
    alignSelf: "center",
    margin: "10px 0",
  },
  botao: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default FormularioContato;
