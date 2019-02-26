import React from "react";
import {connect, Provider} from "react-redux";
import {NetInfo} from "react-native";
import {reduxifyNavigator} from "react-navigation-redux-helpers";
import AppNavigator from "./navigation";
import configStore from './store';
import './config/reactotron'
import {ThemeProvider} from "react-native-elements";
import {theme} from "./styles";

NetInfo.isConnected.addEventListener("connectionChange", console.log);

const store = configStore();

const AppRoot = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
    state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(AppRoot);

const App = () => (
  <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppWithNavigationState />
      </ThemeProvider>
  </Provider>
);

export default App;
