import React from "react";
import { useAuth } from "../../context/authContext";
import CardLogin from "../../components/general/CardLogin";
import AlertLoading from "../../components/general/AlertLoading";
import "../../components/styles/styleLogin.css";
export default function Login() {
  const { loading } = useAuth();
  return (
    <>
      {loading && <AlertLoading />}
      <div id="login-body">
        <CardLogin></CardLogin>
      </div>
    </>
  );
}
