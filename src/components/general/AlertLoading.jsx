import React from "react";

export default function AlertLoading() {
  return (
    <div className="toast toast-top toast-end z-[2000]">
      <div className="alert bg-black/70 backdrop-blur-md">
        <span className="font-bold text-lg">Cargando...</span>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    </div>
  );
}
