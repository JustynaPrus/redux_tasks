import React from "react";
import { useSelector } from "react-redux";
import { WelcomeComponent } from "./WelcomeComponent";
import { FakeLoginComponent } from "./FakeLoginComponent";

export const CheckLogIn = () => {
  const { loggedIn } = useSelector((state) => state.isLogInSlice);

  return <>{loggedIn ? <WelcomeComponent /> : <FakeLoginComponent />}</>;
};
