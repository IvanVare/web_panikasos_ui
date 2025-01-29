<<<<<<< HEAD
import HeaderNav from "./components/Header";
import FooterBody from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Functions from "./pages/Functions";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import { Routes, Route } from "react-router-dom";
=======
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/general/Footer";
import HeaderNav from "./components/general/Header";
import HeaderUser from "./components/user/HeaderUser";
import Home from "./pages/general/Home";
import AboutUs from "./pages/general/AboutUs";
import Functions from "./pages/general/Functions";
import Login from "./pages/general/Login";
import Register from "./pages/general/Register"; // Importar la página Register
import Dashboard from "./pages/user/Dashboard";
import UserInfo from "./pages/user/UserInfo";

import { ProtectedRoute } from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/authContext";

>>>>>>> master
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HeaderNav />}>
<<<<<<< HEAD
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/inicio" element={<Home></Home>}></Route>
            <Route path="/acerda_de" element={<Aboutus></Aboutus>}></Route>
            <Route path="/funciones" element={<Functions></Functions>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard></Dashboard>
                </ProtectedRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>

      <FooterBody />
=======
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Navigate to="/" replace />} />
            <Route path="/acerca_de" element={<AboutUs></AboutUs>} />
            <Route path="/funciones" element={<Functions></Functions>} />
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          </Route>

          <Route
            element={
              <ProtectedRoute>
                <HeaderUser />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-info" element={<UserInfo />} />
          </Route>
        </Routes>
      </AuthProvider>
      <Footer />
>>>>>>> master
    </>
  );
}

export default App;
