import React from "react";
import styles from "./styles/header.module.css";
import { Outlet } from "react-router-dom";
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
              <a className="" href="/Home">
                Inicio
              </a>
            </li>
            <li>
              <a className="" href="/Acerca">
                Acerca de
              </a>
            </li>
            <li>
              <a className="" href="/Funciones">
                Funciones
              </a>
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
