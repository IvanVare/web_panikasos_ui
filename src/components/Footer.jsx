import React from "react";
import "../components/styles/styleFooter.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="sb_footer section_footer">
          <div className="sb_footer-links">
            <div className="sb_footer-links_div">
              <h1>PanikaSOS</h1>
              <a href="/acercade">
                <p>Acerca de</p>
              </a>
              <a href="/function">
                <p>Funciones</p>
              </a>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4>Rcursos</h4>

            <a href="/acercade">
              <p>Acerca de_rec</p>
            </a>
            <a href="/function">
              <p>Funciones_rec</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Siguenos en </h4>
            <p>Face</p>
            <p>Insta</p>
            <p>TWitter</p>
          </div>

          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>
                @{new Date().getFullYear} PanikaSOS. Todos los derechos
                reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
