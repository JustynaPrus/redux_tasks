<<<<<<< HEAD
import React from "react";
import { useSelector } from "react-redux";
import { WelcomeComponent } from "./WelcomeComponent";
import { FakeLoginComponent } from "./FakeLoginComponent";

export const CheckLogIn = () => {
  const { loggedIn } = useSelector((state) => state.isLogInSlice);

  return <>{loggedIn ? <WelcomeComponent /> : <FakeLoginComponent />}</>;
};
=======
import React from "react";
import { useSelector } from "react-redux";
import { WelcomeComponent } from "./WelcomeComponent";
import { FakeLoginComponent } from "./FakeLoginComponent";

export const CheckLogIn = () => {
  const { loggedIn } = useSelector((state) => state.isLogInSlice);

  return <>{loggedIn ? <WelcomeComponent /> : <FakeLoginComponent />}</>;
};
>>>>>>> f36d9c31cfbf4ff0a43d5b0cfd94ad861324c6bc
