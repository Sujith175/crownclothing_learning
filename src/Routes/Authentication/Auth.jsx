import React from "react";
import SignInForm from "../../Components/SignIn/SignInForm";
import SignUpFrom from "../../Components/SignUp/SignUpFrom";
import { AutheticationContainer } from "./AuthStyles";

const Auth = () => {
  return (
    <AutheticationContainer>
      <SignInForm />
      <SignUpFrom />
    </AutheticationContainer>
  );
};

export default Auth;
