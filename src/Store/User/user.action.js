import { createAction } from "../../Utils/Reducer/reducer.utils";
import USER_ACTION_TYPES from "./user.types";

export const checkUserSession = () => {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
};

export const googleSignInStart = () => {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_START);
};
export const emailSignInStart = (email, password) => {
  return createAction(USER_ACTION_TYPES.EMAIL_SIGNIN_START, {
    email,
    password,
  });
};

export const signInSuccess = (user) => {
  return createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, user);
};

export const signInFailed = (error) => {
  return createAction(USER_ACTION_TYPES.SIGNIN_FAILED, error);
};

export const signUpStart = (email, password, displayName) => {
  return createAction(USER_ACTION_TYPES.SIGNUP_START, {
    email,
    password,
    displayName,
  });
};

export const signUpSuccess = (user, additionalDetails) => {
  return createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, {
    user,
    additionalDetails,
  });
};

export const signOutStart = () => {
  return createAction(USER_ACTION_TYPES.SIGNOUT_START);
};

export const signOutSuccess = () => {
  return createAction(USER_ACTION_TYPES.SIGNOUT_SUCCESS);
};
export const signOutFailed = (error) => {
  return createAction(USER_ACTION_TYPES.SIGNOUT_FAILED, error);
};

export const signUpFailed = (error) => {
  return createAction(USER_ACTION_TYPES.SIGNUP_FAILED, error);
};
