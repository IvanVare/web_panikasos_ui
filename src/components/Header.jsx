import React from "react";
import styles from "./styles/header.module.css";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <nav>
          <ul className="nav">
            <li>
              <div className=" container">
                <a className="navbar-brand" href="#">
                  <img
                    src="https://www.ciisder.mx/images/logos/logo_uatx_2019.png"
                    alt="bos"
                    width={70}
                    height={70}
                  />
                </a>
              </div>
            </li>
            <li className=" nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Inicio
              </a>
            </li>
            <li className="nb_header nav-item">
              <a className="nav-link" href="/Acerca">
                Acerca de
              </a>
            </li>
            <li className="nb_header nav-item">
              <a className="nb_header nav-link" href="/Funciones">
                Funciones
              </a>
            </li>
            <li className="nb_header nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Descargar
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
