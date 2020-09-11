import React, { useState, useContext } from "react";

import Heading from "../../heading/Heading";
import Uploadfile from "../fileupload/Uploadfile";
import Images from "../images/Images";
import Modal from "../modal/Modal";

import { photoContext } from "../../../context/index";

import Landing from "../../landing/Landing";
import NavBar from "../NavBar/NavBar";
import Loader from "../loader/Loader";
function User() {
  const [imageurl, setImageurl] = useState(null);

  const { currentUser } = useContext(photoContext);

  return (
    <>
      {!!currentUser ? (
        <div className="container w-11/12 m-auto">
          <NavBar />
          <Heading />
          <Uploadfile />
          <Images setImageurl={setImageurl} imageurl={imageurl} />
          {imageurl && <Modal setImageurl={setImageurl} imageurl={imageurl} />}
        </div>
      ) : window.location.pathname === "/user" ? (
        <Loader />
      ) : (
        <Landing />
      )}
    </>
  );
}

export default User;
