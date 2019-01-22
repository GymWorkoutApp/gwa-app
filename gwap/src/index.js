import React from "react";
import { Provider, connect } from "react-redux";
import { NetInfo } from "react-native";
import {reduxifyNavigator} from "react-navigation-redux-helpers";
import AppNavigator from "./navigation";
import configStore from './store';
import './config/reactotron'

NetInfo.isConnected.addEventListener("connectionChange", console.log);

const store = configStore();

const AppRoot = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
    state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(AppRoot);

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
