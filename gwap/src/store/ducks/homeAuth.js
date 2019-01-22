import { createReducer, createActions } from "reduxsauce";
import { markActionsOffline } from "redux-offline-queue";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  homeAuthRequest: ["data"],
  homeAuthSuccess: ["data"]
});

markActionsOffline(Creators, ["homeAuthRequest"]);

export const HomeAuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false
});

/* Reducers */

export const reducer = createReducer(INITIAL_STATE, {
  [HomeAuthTypes.HOME_AUTH_REQUEST]: state => state.merge({ loading: true }),
  [HomeAuthTypes.HOME_AUTH_SUCCESS]: (state) => state.update("data", data => [...data])
});
