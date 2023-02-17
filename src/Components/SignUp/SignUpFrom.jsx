import React, { useState } from "react";
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/firebaseUtils/firebaseutils";
import ButtonComponent, {
  BUTTON_TYPES_CLASSES,
} from "../Button/ButtonComponent";
import FormInput from "../FormInput/FormInput";
import { SignUpContainer } from "./SignUpStyles";

const defaultFormFeild = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpFrom = () => {
  const [formFeild, setFormFeild] = useState(defaultFormFeild);
  const { displayName, email, password, confirmPassword } = formFeild;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeild({ ...formFeild, [name]: value });
  };
  const resetFormFeilds = () => {
    setFormFeild(defaultFormFeild);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFeilds();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot Create User with Existing Email");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <SignUpContainer>
      <h2>Don't Have an Account?</h2>
      <form onSubmit={submitHandler}>
        <span>Sign Up With your Email</span>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          required
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          required
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <ButtonComponent
          buttonType={BUTTON_TYPES_CLASSES.base}
          children="Sign Up"
          type="submit"
        />
      </form>
    </SignUpContainer>
  );
};

export default SignUpFrom;
