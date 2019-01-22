import {call, put} from "redux-saga/effects";

import SignInActions from "../ducks/signin";
import {signIn} from "../../services";

export function* signInUser( user ) {
  const response = yield call(signIn(user));

  yield put(SignInActions.signInSuccess(response.data));
}
