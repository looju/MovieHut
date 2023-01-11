import React, { createContext,useState } from "react";
import { auth } from "./../../Config/Config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const Authorization = createContext();

export const AuthorizationProvider = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

  const Login = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
     setUser(userCredentials.user)
     setIsLoading(false)
    })
    .catch((error)=>{
        setError(error.message)
        setIsLoading(true)
    })
  };
};
