import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

export default function HeaderUser() {
  const { userData, logOut, loading } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  if (loading) {
    return (
      <>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <button className="btn w-3/4 bg-slate-50 text-lg btn-disabled">
              Cargando...
            </button>
          </div>
          <div className="navbar-end"></div>
        </div>
        <Outlet />
      </>
    );
  }

  return (
    <>
      <div className="navbar  backdrop-blur-md bg-white/5 h-[70px] w-full fixed z-[1000] rounded-2xl border-solid border-[rgba(255,255,255,0.3)] left-0 top-0;">
        <div className="navbar-start">
          <NavLink
            className="btn w-4/5 bg-black text-sm sm:text-base md:text-xl hover:bg-[rgb(255,0,76)] "
            to="/dashboard"
          >
            Bienvenido(a) {userData.firstName}
          </NavLink>
        </div>
        <div className="navbar-end">
          <button
            className="btn bg-black  hover:bg-[rgb(255,0,76)] w-1/4"
            onClick={handleLogOut}
          >
            LogOut
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
