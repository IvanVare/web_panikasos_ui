import { useState } from "react";
import HeaderNav from "./components/Header";
import FooterBody from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Functions from "./pages/Functions";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderNav />}>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/Acerca" element={<Aboutus></Aboutus>}></Route>
          <Route path="/Funciones" element={<Functions></Functions>}></Route>
        </Route>
      </Routes>
      <FooterBody />
    </>
  );
}

export default App;
