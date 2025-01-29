import React from "react";
import styles from "../styles/header.module.css";
import { NavLink, Outlet } from "react-router-dom";

/*
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
*/
function Header() {
  return (
    <>
      <div className="navbar fixed z-[1000] rounded-2xl bg-black/65 backdrop-blur-sm">
        <div>
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <li>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </li>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content z-[1000] bg-black/95 backdrop-blur-sm rounded-box  mt-3 w-52 p-2 shadow-xl"
            >
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
              <li className="menu relative">
                <details>
                  <summary className="cursor-pointer">
                    <a>Opciones</a>
                  </summary>
                  <ul className="menu-vertical bg-black/90 backdrop-blur-sm absolute rounded-xl py-5">
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
          </div>
          <img
            src="src/assets/images/icon_panikasos_night.png"
            alt="PaniKa SOS"
            width={52}
            height={50}
            className="mx-5"
          />
        </div>

        <div className="hidden lg:flex flex-grow justify-center  mx-10">
          <ul className="menu menu-horizontal grid-cols-4 w-11/12">
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
            <li className="menu relative">
              <details>
                <summary className="cursor-pointer">
                  <a>Opciones</a>
                </summary>
                <ul className="menu-vertical bg-black/90 backdrop-blur-sm absolute rounded-xl">
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
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
