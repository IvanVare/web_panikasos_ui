import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { searchUserById, updateUser } from "../../api/user/ApiUser";
import { useAuth } from "../../context/authContext";
import { useForm } from "react-hook-form";

export default function UserInfo() {
  const { userData } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    search();
  }, [userData.id, setValue]);

  const search = async () => {
    try {
      searchUserById(userData.id).then((result) => {
        Object.keys(result).forEach((key) => {
          setValue(key, result[key]);
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data.age);

      const update = await updateUser({
        id: userData.id,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        age: count,
        status: data.status,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  });

  const [count, setCount] = useState(parseInt(userData.age));

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  if (loading) {
    return (
      <>
        <div className="min-h-[100dvh] grid-rows-[auto_1fr_auto] ">
          <div className="pt-16 mx-3 flex justify-center w-full">
            <div className="grid w-full grid-cols-1 gap-4 p-4 rounded-lg">
              <div className="skeleton h-16 w-full "></div>
              <div className="skeleton h-2 w-full"></div>
              <div className="skeleton h-2 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-3 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen p-6 bg-black relative overflow-hidden flex flex-col justify-center items-center">
        {/* Contenedor principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Skills Board */}

          <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
            <div className="text-center justify-center items-center flex flex-col mb-4">
              <h2 className="text-lg font-semibold">
                Modificar datos de usuario
              </h2>
              <div className="w-24 h-24 p-4 text-black flex  rounded-full justify-center shadow-lg items-center bg-slate-100">
                <FaRegUser className="w-14 h-14" />
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Información del usuario</h2>
            </div>
            <div className="space-y-2">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  {...register("firstName", { required: true })}
                  placeholder="Nombre (s)"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  {...register("lastName", { required: true })}
                  placeholder="Apellido (s)"
                />
              </label>
            </div>
          </div>

          {/* Interview Record */}
          <div className="col-span-1 bg-blue-500 text-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Edad</h2>
            <div className="text-center">
              <div className="w-[250px] max-w-sm relative mt-4">
                <label className="block mb-1 text-sm text-slate-600">
                  Edad actual
                </label>
                <div className="relative ">
                  <button
                    className="absolute right-9 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                    type="button"
                    onClick={handleDecrease}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                  </button>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                  </svg>

                  <input
                    type="number"
                    min="0"
                    max="99"
                    value={count}
                    {...register("age", { required: true })}
                    step="1"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <button
                    class="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={handleIncrease}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                  </button>
                </div>
                <p class="flex items-center mt-2 text-xs text-slate-400">
                  Modifica tu edad en el campo de arriba
                </p>
              </div>
            </div>
          </div>

          {/* Candidates Review */}
          <div className="col-span-2 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Opciones</h2>
            <div className="">
              <button
                className="btn btn-outline btn-warning"
                onClick={handleCancel}
              >
                Cancelar
              </button>
              <button
                className="btn btn-outline btn-success"
                onClick={onSubmit}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
