import React, { useContext } from "react";
import { photoContext } from "../../context/index";

import Loginform from "../loginform/Loginform";
import { Redirect } from "react-router-dom";

function Landing() {
  const { currentUser } = useContext(photoContext);
  return (
    <div className="">
      {!!currentUser ? <Redirect to={{ pathname: "/user" }} /> : <Loginform />}
    </div>
  );
}

export default Landing;
