import React from "react";
import "../components/styles/styleFooter.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <footer className=" py-3 my-4 border-top">
          <div className="sb_footer ">
            <div className="sb_footer-links">
              <div className="sb_footer-links_div">
                <h1>PaniKaSOS</h1>
                <a className="btn btn-outline-danger">Descargar</a>
              </div>
            </div>
            <div className="sb_footer-links_div">
              <h4>Siguenos en... </h4>
              <a href="#">
                <p>Facebook</p>
              </a>
              <a href="#">
                <p>Instagram</p>
              </a>
              <a href="#">
                <p>Twitter</p>
              </a>
            </div>
          </div>
          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>
                &copy;{new Date().getFullYear}2024 PaniKaSOS. Todos los derechos
                reservados
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
