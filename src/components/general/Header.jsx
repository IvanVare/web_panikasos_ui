import React from "react";
import styles from "../styles/header.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="">
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
                  to="/acerca_de"
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
              <li></li>

              <li className="menu relative">
                <details>
                  <summary className="cursor-pointer">
                    <a>Abrir</a>
                  </summary>
                  <ul className="menu-vertical bg-black absolute rounded-xl">
                    <li>
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive ? styles.active : ""
                        }
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/register"
                        className={({ isActive }) =>
                          isActive ? styles.active : ""
                        }
                      >
                        Register
                      </NavLink>
                    </li>
                    <li>
                      <a>Descargar</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
