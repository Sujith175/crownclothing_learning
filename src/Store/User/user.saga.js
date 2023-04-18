import { takeLatest, put, all, call, take } from "redux-saga/effects";

import USER_ACTION_TYPES from "./user.types";

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
} from "./user.action";

import {
  SignInAuthWithEmailAndPassword,
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInWithGooglePopup,
  signOutUser,
} from "../../Utils/firebaseUtils/firebaseutils";

export function* getSnapShotFromUserAuth(userAuth, additionalDeials) {
  try {
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDeials
    );
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapShotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      SignInAuthWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* onEmailSignInStart() {
  try {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_START, signInWithEmail);
    yield put(signUpSuccess);
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess);
  } catch (error) {
    yield put(signOutFailed(error));
  }
}
export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapShotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignupStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_SUCCESS, signInAfterSignUp);
}

export function* onSIgnOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNOUT_START, signOut);
}
export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpSuccess),
    call(onSignupStart),
    call(onSIgnOutStart),
  ]);
}
