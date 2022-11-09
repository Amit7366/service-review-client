import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUser,profile)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUserAccount) => {
      setUser(currentUserAccount);
      setLoader(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { user, loader, createUser,updateUserProfile };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
