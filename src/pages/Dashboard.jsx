import React from "react";
import { useAuth } from "../context/authContext";
export default function Dashboard() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading</h1>;
  return (
    <>
      <h1>Bienvenido</h1>
      <p>{user.email}</p>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}
