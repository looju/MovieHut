import React, { useContext } from "react";
import { MainNavigator } from "./AppNavigator/MainNavigator/MainNavigator";
import { AccountNavigation } from "./AccountNavigator/AccountNavigation";
import { Authorization } from "../Services/Core/Auth/Auth";

export const Navigation = () => {
  const { home } = useContext(Authorization);

  // return home ? <MainNavigator /> : <AccountNavigation />;
  return <MainNavigator/>
};
