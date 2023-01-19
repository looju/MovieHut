import React, { createContext, useState } from "react";
import { auth } from "./../../Config/Config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { makeRedirectUri, startAsync } from "expo-auth-session";
import { supabase, supabaseUrl } from "../../Config/SupabaseConfig";

export const Authorization = createContext();

export const AuthorizationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(false);
  const [user, setUser] = useState(null);
  const [home, setHome] = useState(false);
  const [accessToken, setAccessToken] = useState("");

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
            setError("An unexpected error occured");
          }
          console.log(error.code);
          setIsLoading(null);
        });
    }
  };

  const googleSignIn = async () => {
    // This will create a redirectUri
    // This should be the URL you added to "Redirect URLs" in Supabase URL Configuration
    // If they are different add the value of redirectUrl to your Supabase Redirect URLs
    const redirectUrl = makeRedirectUri({
      path: "exp://192.168.43.55:19000/--/auth/callback",
    });

    const authResponse = await startAsync({
      authUrl: `${supabaseUrl}/auth/v1/authorize?provider=google&redirect_to=${redirectUrl}`,
      returnUrl: redirectUrl,
    });

    // If the user successfully signs in
    // we will have access to an accessToken and an refreshToken
    // and then we'll use setSession (https://supabase.com/docs/reference/javascript/auth-setsession)
    // to create a Supabase-session using these token
    if ((authResponse.type = "success")) {
      await fetch("https://www.googleapis.com/plus/v1/people/me", {
        method: "POST",
        contentType: "application/json",
        headers: {
          Authorization: `Bearer ${authResponse.params.access_token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data))
        .then(setHome(true))
        .catch((error) => {
          console.log("error fetching user auth" + error);
        });
      // supabase.auth.setSession({
      //   access_token: authResponse.params.access_token,
      //   refresh_token: authResponse.params.refresh_token,
      // });
    }
  };

  const SignOut = () => {
    setUser(null);
    setHome(false);
  };

  return (
    <Authorization.Provider
      value={{
        SignUp,
        Login,
        SignOut,
        googleSignIn,
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
