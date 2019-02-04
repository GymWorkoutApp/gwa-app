import { createReducer, createActions } from "reduxsauce";
import { markActionsOffline } from "redux-offline-queue";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  signInRequest: ["user"],
  signInSuccess: ["user"]
});

// markActionsOffline(Creators, ["signInRequest"]);

export const SignInTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false
});

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [SignInTypes.SIGN_IN_REQUEST]: state => state.merge({ loading: true }),
  [SignInTypes.SIGN_IN_SUCCESS]: (state, { user }) => state.update("data", data => [...data, user])
});
