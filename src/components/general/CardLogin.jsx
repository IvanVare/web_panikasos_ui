import React, { useEffect, useState } from "react";
import "../styles/styleLogin.css";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";

export default function CardLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isLogged, role } = useAuth();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      if (role === "USER") {
        navigate("/dashboard", { replace: true });
      }
    } else {
      navigate("/login", { replace: true });
    }
  }, [isLogged, role]);

  const onSubmit = handleSubmit(async (user) => {
    try {
      const loginUser = await login(user);
      if (!loginUser) {
        setError("Credenciales incorrectas, intentalo de nuevo.");
        return;
      }
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al iniciar sesión.");
    }
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div id="cardLogin">
      <div id="card-content">
        <div id="card-title">
          <h2>Iniciar sesión</h2>
          <div className="underline-title"></div>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <div>
            <label className="input input-bordered input-error flex items-center gap-2">
              <IoMdMail />
              <input
                type="email"
                className="grow"
                placeholder="Correo electrónico"
                autoComplete="on"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <p className="text-red-600 text-xs font-bold">
                Correo electrónico necesario
              </p>
            )}
          </div>

          <div>
            <div className="max-w-sm my-5">
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
                {errors.password && (
                  <p className="text-red-600 text-xs font-bold">
                    Contraseña necesaria
                  </p>
                )}
              </div>
            </div>
          </div>
          {error && (
            <div className="bg-[#ff004c] p-2 text-white rounded-lg">
              <p>{error}</p>
            </div>
          )}

          <input
            id="submit-btn"
            type="submit"
            name="submit"
            value="LOGIN"
            className="mt-12"
          />
          <a href="/register" id="signup">
            ¿Aún no tienes cuenta?
          </a>
        </form>
      </div>
    </div>
  );
}
