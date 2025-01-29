<<<<<<< HEAD
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

=======
import { useEffect, useState, createContext, useContext } from "react";
import axiosBase from "../api/axios";

export const authContext = createContext();
>>>>>>> master
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not provider");
  return context;
};

export function AuthProvider({ children }) {
<<<<<<< HEAD
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signup = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logout, loading }}>
=======
  const [userData, setUserData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [errors, setErrors] = useState([]);

  //Guardar datos del usuario en el local storage
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("User_logged"));
    const Tkn = sessionStorage.getItem("token");
    if (loggedUser) {
      setAccessToken(Tkn);
      setUserData(loggedUser);
      setIsLogged(true);
    }
    setLoading(false);
  }, []);

  //Comprobar si el usuario está logueado
  useEffect(() => {
    async function checkLogin() {
      const token = sessionStorage.getItem("token");
      if (!token) {
        setIsLogged(false);
        setUserData(null);
        return;
      }
    }
    checkLogin();
  }, []);

  //Registrar usuario
  const register = async (user) => {
    try {
      const response = await axiosBase.post("/api/auth/register", user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      });
      console.log("Registered user");
      return true;
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  //Iniciar sesión de usuario
  const login = async (user) => {
    try {
      setLoading(true);
      const response = await axiosBase.post("/api/auth/login", user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      });

      const token = response?.data?.token.token;
      const DataUser = response?.data?.user;
      //Comprobar
      if (token && DataUser) {
        //Guardar los datos
        sessionStorage.setItem("token", token);
        localStorage.setItem("User_logged", JSON.stringify(response.data.user));
        setRole(response?.data?.token.rol[0].name);
        setAccessToken(sessionStorage.getItem("token"));
        setUserData(DataUser);
        setIsLogged(true);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //Cerrar sesión
  const logOut = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("User_logged");
    setAccessToken(null);
    setIsLogged(false);
    setUserData(null);
    setLoading(false);
    localStorage.removeItem("loggedUser");
  };

  return (
    <authContext.Provider
      value={{
        register,
        login,
        logOut,
        userData,
        loading,
        isLogged,
        errors,
        accessToken,
        role,
        setUserData,
        setLoading,
      }}
    >
>>>>>>> master
      {children}
    </authContext.Provider>
  );
}
