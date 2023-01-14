import React, { useContext } from "react";
import { MainNavigator } from "./AppNavigator/MainNavigator/MainNavigator";
import { AccountNavigation } from "./AccountNavigator/AccountNavigation";
import { Authorization } from "../Services/Core/Auth/Auth";
import { AuthNavigation } from './AuthNavigator/AuthNavigation';

export const Navigation = () => {
  const { home } = useContext(Authorization);

  return home ? <AuthNavigation /> : <AccountNavigation />;
  // return <MainNavigator/>
};
