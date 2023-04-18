import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonComponent, {
  BUTTON_TYPES_CLASSES,
} from "../Button/ButtonComponent";
import FormInput from "../FormInput/FormInput";
import { ButtonsContainer, SignInContainer } from "./SignInstyles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../Store/User/user.action";

const defaultFormFeild = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFeild, setFormFeild] = useState(defaultFormFeild);
  const { email, password } = formFeild;

  const signInwithGoogle = async () => {
    dispatch(googleSignInStart());
  };
  const resetFormFeilds = () => {
    setFormFeild(defaultFormFeild);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeild({ ...formFeild, [name]: value });
  };
  const onSubmitHandle = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFeilds();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Invalid Credentials");
          break;

        case "auth/user-not-found":
          alert("User with this Email is not Registered");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Already Have an Account?</h2>
      <span>Sign In With Your Email and Password</span>
      <form onSubmit={onSubmitHandle}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          required
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />

        <ButtonsContainer>
          <ButtonComponent buttonType={BUTTON_TYPES_CLASSES.base} type="submit">
            SignIn
          </ButtonComponent>

          <ButtonComponent
            onClick={signInwithGoogle}
            buttonType={BUTTON_TYPES_CLASSES.google}
          >
            Google SignIn
          </ButtonComponent>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
