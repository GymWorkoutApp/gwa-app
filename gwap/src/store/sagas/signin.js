import {put} from "redux-saga/effects";

import SignInActions from "../ducks/signin";
import {signIn} from "../../services";

export function* signInUser( user ) {
  const response = yield signIn(user);
  const data = response.data
  if (response.ok) {
    yield put(SignInActions.signInSuccess(data));
  } else {
    yield put(SignInActions.signInError(data));
  }
}
