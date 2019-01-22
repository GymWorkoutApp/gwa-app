import {combineReducers} from "redux";

import {reducer as offline} from "redux-offline-queue";
import {reducer as repositories} from "./repositories";
import {reducer as signin} from "./signin";
import {reducer as homeAuth} from "./homeAuth";
import navReducer from "./nav";

export default combineReducers({
  nav: navReducer,
  offline,
  repositories,
  homeAuth,
  signin,
});
