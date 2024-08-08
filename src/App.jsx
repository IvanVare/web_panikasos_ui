import HeaderNav from "./components/Header";
import FooterBody from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Functions from "./pages/Functions";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Menu from "./pages/Dashboard";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderNav />}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/inicio" element={<Home></Home>}></Route>
          <Route path="/acerda_de" element={<Aboutus></Aboutus>}></Route>
          <Route path="/funciones" element={<Functions></Functions>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
        </Route>
      </Routes>
      <FooterBody />
    </>
  );
}

export default App;
