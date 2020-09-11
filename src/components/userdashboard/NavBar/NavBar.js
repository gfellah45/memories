import React, { useContext } from "react";
import { firebaseAuth } from "../../../firebase/config";
import { photoContext } from "../../../context/index";
function NavBar() {
  const signout = () => {
    firebaseAuth.signOut();
    window.location.assign("/");
  };

  const { currentUser } = useContext(photoContext);

  const imgUrl = currentUser.photoURL
    ? currentUser.photoURL
    : "/images/no-image-icon-23479.png";
  return (
    <div className="">
      <div className=" pt-6 ">
        <div className="flex justify-between container w-full px-2 lg:w-4/5 m-auto">
          <div>
            <img
              src={`${imgUrl}`}
              alt="no-img"
              className="w-12 h-12 cursor-pointer rounded-full border-2 "
            />
          </div>
          <div className="font-bold text-6xl  text-blue-800 mm">Memories</div>
          <div className="  mt-2 ">
            <button
              className="px-2 w-16 py-2 bg-blue-200 text-blue-800   rounded  hover:underline cursor-pointer"
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
