import React from "react";
import styles from "./styles/header.module.css";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <nav class="navbar ">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <div class="container">
                <a class="navbar-brand" href="#">
                  <img
                    src="https://www.ciisder.mx/images/logos/logo_uatx_2019.png"
                    alt="bos"
                    width={70}
                    height={70}
                  />
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Home">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Acerca">
                Acerca de
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Funciones">
                Funciones
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">
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
