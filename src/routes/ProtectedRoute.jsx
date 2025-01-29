import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { loading, accessToken, userData, logOut } = useAuth();

  if (loading) {
    return (
      <>
        <div className="toast toast-top toast-end z-50">
          <div className="alert bg-slate-700">
            <span className="font-bold">Cargando contenido.</span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        </div>

        <div className="justify-center min-h-screen ">
          <div className="pt-16 md:px-40 lg:px-44 sm:px-20">
            <div className="justify-center ">
              <div className="flex w-full h-full gap-4">
                <div className="skeleton h-64 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!accessToken || !userData) {
    logOut();
    return <Navigate to="/login"></Navigate>;
  }

  return <>{children}</>;
};
