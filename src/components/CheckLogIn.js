import React from "react";
import { useSelector } from "react-redux";
import { WelcomeComponent } from "./WelcomeComponent";
import { FakeLoginComponent } from "./FakeLoginComponent";

export const CheckLogIn = () => {
  const isloggIn = useSelector((state) => state.loggedIn);

  return <>{isloggIn ? <WelcomeComponent /> : <FakeLoginComponent />}</>;
};
