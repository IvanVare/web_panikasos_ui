import React, { useState } from "react";
import "./styles/styleSignup.css";
import { useAuth } from "../context/authContext";

import { useNavigate } from "react-router-dom";
export default function CardSignup() {
  const [user, setUser] = useState({
    nameUser: "",
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div id="cardSignup">
        <div id="card-content">
          <div id="card-title">
            <h2>Bienvenido</h2>
            <div className="underline-title"></div>
          </div>
          {error && <p>aasaa{error}</p>}
          <form className="form" onSubmit={handleSubmit}>
            <label for="user-email">Nombre</label>
            <input
              id="user-email"
              className="form-content"
              type="text"
              name="nameUser"
              onChange={handleChange}
            />
            <div className="form-border"></div>

            <label for="user-email">Email</label>
            <input
              id="user-email"
              className="form-content"
              type="email"
              name="email"
              onChange={handleChange}
            />
            <div className="form-border"></div>
            <label for="user-password">Password</label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              onChange={handleChange}
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
