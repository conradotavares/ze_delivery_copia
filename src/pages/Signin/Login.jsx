import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // const [users, setUsers] = useState([]);

  const user = [
    {
      email: "admin@admin.com",
      senha: "admin123",
    },
  ];
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if ((email === user[0].email && senha === user[0].senha) === true) {
      // redireciona para algum lugar

      localStorage.setItem("autentication", true);
      navigate("/Home");

    } else {
      alert("Email e/ou senha incorretos");
      localStorage.setItem("autentication", false);
    }
  }

  return (
    <>
      <div className="form-container">
        <div className="div-logo">
          <img
            src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75"
            alt="logo"
            className="logo-login"
          ></img>
          <span className="span-header">
            Entrar na conta com outros serviços:
          </span>
        </div>

        <main className="main-content">
          <button className="form-button face">Continuar com Facebook</button>
          <button className="form-button apple">Continuar com a Apple</button>

          <div className="div-hr-p">
            <hr className="line"></hr>
            <p className="text">OU</p>
            <hr className="line"></hr>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <p className="p-form">
              Insira seu e-mail para entrar ou se cadastrar:
            </p>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="form-input"
            />
            <button className="form-button submit">Entrar</button>
            <div className="div-faq">
              <p>Precisa de ajuda? Entre no</p>
              <a
                className="faq-a"
                href="https://faq-consumidor-zedelivery.sprinklr.com/articles/default_topic/no-estou-conseguindo-acessar-minha-conta-old/621889ac3df9251d7ed0da19"
              >
                Me Ajuda, Zé!
              </a>
            </div>
          </form>
        </main>
        {/* <code>{email}, {senha}</code> */}
      </div>
    </>
  );
}

export default Login;
