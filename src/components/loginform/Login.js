import React from "react";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function Login({ setLoginState, loginUser, userDetails, uiConfig, firebase }) {
  const onSubmit = () => {
    setLoginState("register");
  };

  const logUserIn = (e) => {
    e.preventDefault();
    loginUser();
  };

  //
  return (
    <>
      <form
        className=" px-4 border-blue-800 border-2 flex w-full h-full flex-col  lg:w-1/2 p-3 md:border-none lg:border-none"
        action=""
        onSubmit={(e) => logUserIn(e)}
      >
        <div className="text-center my-4 rounded border-blue-800 m-auto md:hidden lg:hidden  instimg">
          <img
            src="images/andre-furtado-JtV6zyOZSrA-unsplash.jpg"
            alt="pic"
            width="150"
            height="150"
          />
        </div>
        <h2 className="text-center font-bold text-2xl text-blue-800">
          Sign in
        </h2>

        <div className="w-4/5 m-auto flex flex-col mt-6">
          <label className="font-bold text-blue-800 " htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="px-4 py-2 text-blue-800  bg-white  "
            placeholder="Username / Email"
            onChange={(e) => userDetails(e)}
          />
        </div>
        <div className="w-4/5 m-auto flex flex-col mt-6 ">
          <label className="font-bold text-blue-800 " htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="px-4 text-blue-800 py-2 bg-white  "
            placeholder="Password"
            onChange={(e) => userDetails(e)}
          />
        </div>

        <div className="w-4/5 m-auto flex justify-between mt-2 ">
          <div className="">
            <input type="checkbox" className="rounded-full p-1 text-sm" />
            <label htmlFor="remember" className="text-sm text-blue-800">
              Remember me?
            </label>
          </div>
          <p className="text-sm text-blue-800 hover:underline cursor-pointer">
            Forgot password
          </p>
        </div>
        <div className="w-4/5 m-auto flex flex-col mt-6 text-center">
          <button className="bg-blue-800 text-white font-bold rounded-sm cursor-pointer hover:opacity-75 px-2 py-2 w-56 m-auto">
            Sign in
          </button>
        </div>
        <div className="w-4/5 m-auto flex flex-col mt-6 text-center">
          <p className="text-blue-800 font-bold">OR</p>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
        <div className="w-4/5 m-auto flex flex-col mt-6 text-center">
          <p className="text-blue-800">
            Don't have an account?{" "}
            <span
              className="cursor-pointer font-bold hover:border-opacity-75 hover:underline"
              onClick={() => onSubmit()}
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
