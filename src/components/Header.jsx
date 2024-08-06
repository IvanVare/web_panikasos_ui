import React from "react";
import styles from "./styles/header.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <nav>
          <ul>
            <li>
              <img
                src="src/assets/images/icon_panikasos_night.png"
                alt="bos"
                width={52}
                height={50}
              />
            </li>
            <li>
              <NavLink
                to="/inicio"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/acerda_de"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Acerca de
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/funciones"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Funciones
              </NavLink>
            </li>
            <li>
              <a className="">Descargar</a>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
