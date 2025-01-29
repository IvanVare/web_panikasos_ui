import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer backdrop-blur-xl border-t-4  bg-black text-base-content p-10 ">
        <aside className="footer-aside">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="black"
                stroke="red"
                stroke-width="10"
              />

              <text
                x="100"
                y="60"
                font-family="Arial, sans-serif"
                font-size="24"
                text-anchor="middle"
                fill="white"
              >
                Pani
                <tspan fill="red">Ka</tspan>
              </text>

              <text
                x="60"
                y="130"
                font-family="Arial, sans-serif"
                font-size="36"
                text-anchor="middle"
                fill="white"
              >
                S
              </text>
              <text
                x="140"
                y="130"
                font-family="Arial, sans-serif"
                font-size="36"
                text-anchor="middle"
                fill="white"
              >
                S
              </text>

              <circle
                cx="100"
                cy="130"
                r="20"
                fill="black"
                stroke="red"
                stroke-width="5"
              />
              <line
                x1="100"
                y1="110"
                x2="100"
                y2="150"
                stroke="red"
                stroke-width="3"
              />
              <line
                x1="80"
                y1="130"
                x2="120"
                y2="130"
                stroke="red"
                stroke-width="3"
              />
            </svg>
            <span className="text-white text-2xl font-bold">PANIKA SOS</span>
          </div>

          <p>
            &copy;{new Date().getDate} 2025 PaniKaSOS. Todos los derechos
            reservados
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Contactos</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Correo electrónico </a>
        </nav>
      </footer>
    </>
  );
}
