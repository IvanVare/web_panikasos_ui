import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { MdOutlineSystemSecurityUpdate } from "react-icons/md";
import { searchUserById } from "../../api/user/ApiUser";
import { LuUserPen } from "react-icons/lu";
import { RiContactsBook2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { userData, loading, setUserData, setLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    try {
      setLoading(true);
      searchUserById(userData.id)
        .then((response) => {
          setUserData(response);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleToUserInfo = () => {
    navigate("/user-info");
  };

  if (loading) {
    return <div>Loading...</div>; // Mostrar un indicador de carga
  }
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-red-300 rounded-lg opacity-50 transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-red-500 rounded-lg opacity-50 transform rotate-45"></div>

        {/* Icons Section */}

        <p className="text-white mb-4 text-sm">Opciones → </p>

        <div className="flex space-x-8 mb-8">
          <button
            className="w-20 h-20 bg-slate-100 text-black  rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:bg-[rgb(255,0,76)] transition transform"
            title="Descargar app"
          >
            <MdOutlineSystemSecurityUpdate className="w-8 h-8" />
          </button>
          <button
            className=" w-20 h-20 bg-white text-black  rounded-full shadow-lg flex items-center justify-center hover:text-white hover:scale-110 hover:bg-[rgb(255,0,76)] transition transform"
            onClick={handleToUserInfo}
            title="Editar perfil"
          >
            <LuUserPen className="w-8 h-8" />
          </button>
          <button
            className="btn-disabled w-20 h-20 bg-slate-400  rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition transform"
            title="Mis contactos"
          >
            <RiContactsBook2Line className="w-8 h-8 text-gray-500" />
          </button>
        </div>

        {/* Main Button */}

        {/* Details Button */}
      </div>
    </>
  );
}
