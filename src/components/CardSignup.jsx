import React from "react";
import "./styles/styleSignup.css";

export default function CardSignup() {
  return (
    <>
      <div id="cardSignup">
        <div id="card-content">
          <div id="card-title">
            <h2>Bienvenido</h2>
            <div className="underline-title"></div>
          </div>
          <form method="post" className="form">
            <label for="user-email">Nombre</label>
            <input
              id="user-email"
              className="form-content"
              type="text"
              name="name"
              required
            />
            <div className="form-border"></div>

            <label for="user-email">Email</label>
            <input
              id="user-email"
              className="form-content"
              type="email"
              name="email"
              autocomplete="on"
              required
            />
            <div className="form-border"></div>

            <label for="user-password">Password</label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              required
            />
            <div className="form-border"></div>

            <input
              id="submit-btn"
              type="submit"
              name="submit"
              value="Registrar"
            />
            <a href="#" id="signup">
              Iniciar sesión
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
