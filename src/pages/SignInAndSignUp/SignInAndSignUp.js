import React from "react";
import "./SignInAndSignUp.scss";
import SignIn from "../../component/SignIn/SignIn";
import SignUp from "../../component/SignUp/SignUp";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
