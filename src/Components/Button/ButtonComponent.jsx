import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  Inverted,
  ButtonSpinner,
} from "./ButtonComponentStyles";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: Inverted,
  }[buttonType]);

const ButtonComponent = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default ButtonComponent;
