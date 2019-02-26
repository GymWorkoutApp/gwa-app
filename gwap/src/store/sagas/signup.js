import {put} from "redux-saga/effects";

import SignUpActions from "../ducks/signup";
import {signUp} from "../../services";

export function* signUpUser( user ) {
  const response = yield signUp(user);
  const data = response.data
  if (response.ok) {
    yield put(SignUpActions.signUpSuccess(data));
  } else {
    yield put(SignUpActions.signUpError(data));
  }
}
