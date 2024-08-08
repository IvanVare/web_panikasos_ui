import React from "react";
import "./styles/styleLogin.css";

export default function CardLogin() {
  return (
    <>
      <div id="cardLogin">
        <div id="card-content">
          <div id="card-title">
            <h2>Inicia sesión</h2>
            <div className="underline-title"></div>
          </div>
          <form method="post" className="form">
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
            <a href="#">
              <legend id="forgot-pass">Forgot password?</legend>
            </a>
            <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
            <a href="#" id="signup">
              ¿Aún no tienes cuenta??
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
