import React from "react";
import { firebaseAuth } from "../../../firebase/config";
function NavBar() {
  const signout = () => {
    firebaseAuth.signOut();
    window.location.assign("/");
  };
  return (
    <div className="">
      <div className=" bg-gradient-to-r from-blue-700 via-blue-400 to-blue-800 py-4 ">
        <div className="flex justify-between container w-full px-2 lg:w-4/5 m-auto">
          <div className="font-bold text-2xl text-blue-200 mm">Memories</div>
          <div className="flex bg-blue-200 rounded mt-2 text-blue-800">
            <button
              className="px-2 py-2   hover:underline cursor-pointer"
              onClick={() => signout()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div>{/* Welcome <span>{currentUser.email}</span> */}</div>
    </div>
  );
}

export default NavBar;
