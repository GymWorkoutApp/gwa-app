import {createActions, createReducer} from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  signInRequest: ["data"],
  signInSuccess: ["data"],
  signInError: ["error"]
});

// markActionsOffline(Creators, ["signInRequest"]);

export const SignInTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  user: {
    username: null,
    password: null
  },
  error: null,
  loading: false
});

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [SignInTypes.SIGN_IN_REQUEST]: state => state.update('loading', () => true),
  [SignInTypes.SIGN_IN_SUCCESS]: (state, { user }) => state.update("user", data => [...data, user]),
  // [SignInTypes.SIGN_IN_SUCCESS]: (state, { user }) => state.update("user", data => [...data, user]),
  [SignInTypes.SIGN_IN_ERROR]: (state, { error }) => state.update('error', () => error),
});
