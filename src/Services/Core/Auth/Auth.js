import React, { createContext, useState } from "react";
import { auth } from "./../../Config/Config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { Alert } from "react-native";
export const Authorization = createContext();

export const AuthorizationProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const Auth=getAuth()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(false);
  const [user, setUser] = useState(null);
  const [home, setHome] = useState(false);
  const [token, setToken] = useState("");

  const Login = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        setIsLoading(false);
        setHome(true);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.code);
        setIsLoading(null);
      });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.uid);
      } else {
        setIsLoading(true);
        setUser(null);
      }
    });
  };

  const SignUp = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (repeatedPassword !== password) {
      setIsLoading(null);
      setError("Looks like the passwords do not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          setUser(userCredentials.user);
          setIsLoading(false);
          setAlert(true);
        })
        .catch((error) => {
          if (error.code == "auth/email-already-exists") {
            setError("Looks like that email already exists");
          } else if (error.code == "auth/invalid-email") {
            setError("Invalid email address");
          } else if (error.code == "auth/email-already-exists") {
            setError("Oops! Looks like that email already exists");
          } else {
            setError(error.message);
          }
          console.log(error.code);
          setIsLoading(null);
        });
    }
  };

  const SignInWithGoogle = async () => {
    await signInWithRedirect(Auth, provider);
    const result = await getRedirectResult(auth);
    if (result) {
      setUser(result.user);
      const credential = provider.credentialFromResult(auth, result);
      const token = credential.accessToken;
      setToken(token);
    }
    else{
      console.log(result.error)
    }
  };

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        Alert.alert("Oops an error occured" + error.message);
      });
  };

  return (
    <Authorization.Provider
      value={{
        SignUp,
        Login,
        SignInWithGoogle,
        SignOut,
        error,
        alert,
        isLoading,
        user,
        home,
      }}
    >
      {children}
    </Authorization.Provider>
  );
};
