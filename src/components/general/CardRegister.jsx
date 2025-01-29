import React, { useState, useEffect } from "react";
import "../styles/styleSignup.css";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa6";
import { FaPersonCane } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";

export default function CardRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: registerUser,
    isLogged,
    errors: registerErrors,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate("/dashboard");
  }, [isLogged]);

  const onSubmit = handleSubmit(async (values) => {
    try {
      const user = {
        ...values,
        status: 1,
      };
      registerUser(user);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div id="cardSignup" className="px-11 py-3">
        <div id="card-title">
          <h2>Bienvenido</h2>
          <div className="underline-title"></div>
        </div>
        {registerErrors.map((error, i) => (
          <div className="bg-red-600 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <form className="form grid gap-3" onSubmit={onSubmit}>
          <div>
            <label className="input input-bordered input-error flex items-center gap-2">
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
                placeholder="Nombre"
                {...register("firstName", { required: true })}
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered input-error flex items-center gap-2">
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
                placeholder="Apellido"
                {...register("lastName", { required: true })}
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered input-error flex items-center gap-2">
              <FaPhone />
              <input
                type="number"
                className="grow"
                placeholder="Número telefonico"
                {...register("phoneNumber", { required: true })}
              />
            </label>
          </div>

          <div>
            <label className="input input-bordered input-error flex items-center gap-2">
              <FaPersonCane />
              <input
                type="number"
                min="1"
                max="99"
                className="grow"
                placeholder="Edad actual"
                {...register("age", { required: true })}
              />
            </label>
          </div>

          <div>
            <label className="input input-bordered input-error flex items-center gap-2">
              <IoMdMail />
              <input
                type="email"
                className="grow"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
          </div>

          <div className="max-w-sm ">
            <div className="relative">
              <label className="input input-bordered input-error flex items-center gap-2">
                <MdOutlinePassword />
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400"
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2.458 12C3.732 7.943 7.37 5 12 5c4.63 0 8.268 2.943 9.542 7-.732 2.114-2.12 3.943-3.958 5.185m-1.49 1.103A9.717 9.717 0 0 1 12 19c-4.63 0-8.268-2.943-9.542-7 .888-2.435 2.631-4.416 4.76-5.564m3.323-.917A9.683 9.683 0 0 1 12 5c4.63 0 8.268 2.943 9.542 7m-6.172 4.481A3.001 3.001 0 0 1 12 15c-.73 0-1.413-.252-1.958-.683m0 0L3 3m7.042 5.185A9.72 9.72 0 0 0 12 5c4.63 0 8.268 2.943 9.542 7m-4.1 3.31c-.185-.185-.4-.35-.648-.477" />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2.458 12C3.732 7.943 7.37 5 12 5c4.63 0 8.268 2.943 9.542 7-.732 2.114-2.12 3.943-3.958 5.185m-1.49 1.103A9.717 9.717 0 0 1 12 19c-4.63 0-8.268-2.943-9.542-7m5.998-2.62c.4-.473.878-.902 1.432-1.268" />
                    </svg>
                  )}
                </button>
              </label>
            </div>
          </div>

          <div className="text-center justify-center items-center">
            <input
              type="submit"
              name="submit"
              value="Registrar"
              className="submit-btn mb-7"
            />
            <br />
            <a href="/login" id="signup">
              Iniciar sesión
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
