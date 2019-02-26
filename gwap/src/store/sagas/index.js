import {all, spawn, takeEvery} from "redux-saga/effects";

import {RepositoriesTypes} from "../ducks/repositories";
import {addRepository} from "./repositories";

import {startWatchingNetworkConnectivity} from "./offline";
import {SignInTypes} from "../ducks/signin";
import {SignUpTypes} from "../ducks/signup";
import {signInUser} from "./signin";
import {signUpUser} from "./signup";

export default function* rootSaga() {
  yield all([
    spawn(startWatchingNetworkConnectivity),
    takeEvery(RepositoriesTypes.ADD_REPOSITORY_REQUEST, addRepository),
    takeEvery(SignInTypes.SIGN_IN_REQUEST, signInUser),
    takeEvery(SignUpTypes.SIGN_UP_REQUEST, signUpUser)
  ]);
}
