import React, { useState, useEffect } from "react";
import { firebase, app, firebaseAuth } from "../firebase/config";
export const photoContext = React.createContext();

export const PhotoProvider = ({ children }) => {
  // let userInfo = JSON.parse(localStorage.getItem("user"));
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const setUserInfo = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    firebaseAuth.onAuthStateChanged(setCurrentUser);
  }, []);
  console.log(currentUser);
  return (
    <photoContext.Provider
      value={{ currentUser, setCurrentUser, user, setUserInfo }}
    >
      {children}
    </photoContext.Provider>
  );
};
