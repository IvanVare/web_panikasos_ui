import React, { useState } from "react";
import "./styles/styleLogin.css";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function CardLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      // Solo navega a /dashboard si el inicio de sesión es exitoso
      navigate("/dashboard");
    } catch (error) {
      setError(error.code); // Guarda el error si ocurre
    }
  };
  return (
    <>
      <div id="cardLogin">
        <div id="card-content">
          <div id="card-title">
            <h2>Inicia sesión</h2>
            <div className="underline-title"></div>
          </div>
          {error && <p>aasaa{error}</p>}
          <form className="form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              id="user-email"
              className="form-content"
              type="text"
              name="email"
              onChange={handleChange}
              autocomplete="on"
              required
            />
            <div className="form-border"></div>

            <label>Password</label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              onChange={handleChange}
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
