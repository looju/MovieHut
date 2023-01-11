import React, { createContext, useState } from "react";
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

  const Login = (email, password, repeatedPassword) => {
    if (repeatedPassword !== password) {
      setIsLoading(true);
      setError("Looks like the passwords do not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          setUser(userCredentials.user);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error.code);
          setIsLoading(true);
        });
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user.uid);
        } else {
          setIsLoading(true);
          setUser(null);
        }
      });
    }
  };

  const signUp = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.code);
        setIsLoading(true);
      });
  };
};
