import React from "react";
import { useAuth } from "../../context/authContext";
import CardRegister from "../../components/general/CardRegister.jsx";
import AlertLoading from "../../components/general/AlertLoading";
import "../../components/styles/styleLogin.css";

export default function Register() {
  const { loading } = useAuth();
  return (
    <>
      {loading && <AlertLoading />}
      <div id="signup-body">
        <CardRegister></CardRegister>
      </div>
    </>
  );
}
