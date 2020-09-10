import React from "react";

function Signup({ setLoginState, userDetails, onCreateNewUser }) {
  const onSubmit = () => {
    setLoginState("login");
  };
  const submit = (e) => {
    e.preventDefault();
    onCreateNewUser();
  };
  return (
    <>
      <form
        className=" px-4 border-blue-800 border-2 flex w-full h-full flex-col  lg:w-1/2 p-3 md:border-none lg:border-none"
        action=""
        onSubmit={(e) => submit(e)}
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
          Sign Up
        </h2>
        <div className="w-4/5 m-auto flex flex-col mt-6">
          <label className="font-bold text-blue-800 " htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="px-4 py-2 text-blue-800"
            placeholder="Username"
            onChange={(e) => userDetails(e)}
          />
        </div>
        <div className="w-4/5 m-auto flex flex-col mt-6">
          <label className="font-bold text-blue-800 " htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="px-4 py-2 text-blue-800"
            placeholder="Email"
            onChange={(e) => userDetails(e)}
          />
        </div>
        <div className="w-4/5 m-auto flex flex-col mt-6">
          <label className="font-bold text-blue-800 " htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="px-4 text-blue-800 py-2"
            placeholder="Password"
            onChange={(e) => userDetails(e)}
          />
        </div>

        <div className="w-4/5 m-auto flex flex-col mt-6">
          <label className="font-bold text-blue-800 " htmlFor="password">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmpassword"
            className="px-4 text-blue-800 py-2"
            placeholder="Confirm Password"
            onChange={(e) => userDetails(e)}
          />
        </div>

        {/* <div className="w-4/5 m-auto flex justify-between mt-2 ">
          <div className="">
            <input type="checkbox" className="rounded-full p-1 text-sm" />
            <label htmlFor="remember" className="text-sm text-blue-800">
              Remember me?
            </label>
          </div>
          <p className="text-sm text-blue-800 hover:underline cursor-pointer">
            Forgot password
          </p>
        </div> */}
        <div className="w-4/5 m-auto flex flex-col mt-6 text-center">
          <button className="bg-blue-800 text-white font-bold rounded-sm cursor-pointer hover:opacity-75 px-4 py-1 w-1/2 m-auto">
            Sign Up
          </button>
        </div>
        <div className="w-4/5 m-auto flex flex-col mt-6 text-center">
          <p className="text-blue-800">
            Already have an account?{" "}
            <span
              className="cursor-pointer font-bold hover:border-opacity-75 hover:underline"
              onClick={() => onSubmit()}
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </>
  );
}

export default Signup;
