import {createActions, createReducer} from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  signUpRequest: ["data"],
  signUpSuccess: ["data"],
  signUpError: ["error"]
});

// markActionsOffline(Creators, ["signInRequest"]);

export const SignUpTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  user: {
    name: null,
    email: null,
    password: null,
    selectedType: null,
    gym: {
      businessName: null,
      cnpj: null,
      phone: null,
    },
    student: {
      weight: null,
      height: null,
      goalId: null,
      cpf: null
    },
    teacher: {
      cpf: null
    }

  },
  error: null,
  loading: false,

});

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [SignUpTypes.SIGN_UP_REQUEST]: state => state.update('loading', () => true),
  [SignUpTypes.SIGN_UP_SUCCESS]: (state, { user }) => state.update("user", data => [...data, user]),
  // [SignInTypes.SIGN_IN_SUCCESS]: (state, { user }) => state.update("user", data => [...data, user]),
  [SignUpTypes.SIGN_UP_ERROR]: (state, { error }) => state.update('error', () => error),
});
