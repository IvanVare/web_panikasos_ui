import React from "react";
import CardFunctions from "../components/CardFunctions";
export default function Functions() {
  return (
    <>
      <h1>Functions</h1>

      <div className="container row row-cols-1 row-cols-md-2 g-4">
        <CardFunctions></CardFunctions>
        <CardFunctions></CardFunctions>
      </div>
    </>
  );
}
