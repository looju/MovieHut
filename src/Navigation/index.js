import React, { useContext, useState } from "react";
import { MainNavigator } from "./AppNavigator/MainNavigator/MainNavigator";
import { AccountNavigation } from "./AccountNavigator/AccountNavigation";

export const Navigation = () => {
  // const {isAuthenticated}=useContext(AuthenticationContext)


  return  <AccountNavigation />
};
