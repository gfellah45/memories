// dependencies
import React, { useState, useContext } from "react";
import { photoContext } from "../../context/index";
import { firebase, firebaseAuth } from "../../firebase/config";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// componentes
import Signup from "./Signup";
import Covers from "./Covers";
import Login from "./Login";

function Loginform() {
  const [loginState, setLoginState] = useState("login");
  const { user, setUserInfo } = useContext(photoContext);
  console.log(user.email, user.password);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/user",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],

    callbacks: {
      // signInSuccess: () => false,
      signInSuccessWithAuthResult: () => false,
    },
  };

  // toast notification

  const notify = (msg) => {
    toast.error(`${msg}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
    });
  };

  const userDetails = (e) => {
    setUserInfo(e);
  };

  // ccreting a user
  const onCreateNewUser = async () => {
    try {
      await firebaseAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
    } catch (err) {
      console.log("this err", err);
    }
  };
  // loggin in a user
  const loginUser = async () => {
    try {
      await firebaseAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        notify("User not found");
      }
      if (err.code === "auth/wrong-password") {
        notify("Wrong credentials");
      }
    }
  };

  return (
    <div className="w-11/12 mt-4 m-auto flex bg-gray-200  lg:w-9/12 lg:m-auto shadow-xl lg:mt-4 p-4">
      {loginState === "login" ? (
        <Login
          setLoginState={setLoginState}
          userDetails={userDetails}
          loginUser={loginUser}
          uiConfig={uiConfig}
          firebase={firebase}
        />
      ) : (
        <Signup
          setLoginState={setLoginState}
          userDetails={userDetails}
          onCreateNewUser={onCreateNewUser}
        />
      )}

      <Covers />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default Loginform;
