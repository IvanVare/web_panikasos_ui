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
                src="https://www.ciisder.mx/images/logos/logo_uatx_2019.png"
                alt="bos"
                width={50}
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
