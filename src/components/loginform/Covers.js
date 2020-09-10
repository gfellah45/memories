import React from "react";
import photo from "./photo.jpg";
function Covers() {
  return (
    <>
      <div className="hidden lg:flex bg-gray-200 p-4 w-full h-full flex-col lg:w-1/2">
        <h3 className="text-center text-blue-800 mm">Memories</h3>
        <div
          className="text-center mt-8 h-64 border-2 rounded border-blue-800 w-9/12 m-auto instimg "
          style={{
            backgroundImage: `url(${photo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/* <img
            src="images/andre-furtado-JtV6zyOZSrA-unsplash.jpg"
            alt="memory"
          /> */}
        </div>
      </div>
    </>
  );
}

export default Covers;
