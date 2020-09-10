import React from "react";
import "./loader.css";
function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="lds-dual-ring"></div>
    </div>
  );
}

export default Loader;
