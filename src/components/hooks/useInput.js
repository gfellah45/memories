import { useState } from "react";

const useInput = (e) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const userDetails = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return { user, setUser };
};

export default useInput;
