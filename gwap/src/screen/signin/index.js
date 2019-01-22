import React from 'react';
import {View} from 'react-native';
import WelcomeText from "react-native/local-cli/templates/HelloNavigation/views/welcome/WelcomeText.android";
import {bindActionCreators} from "redux";
import SignInActions from "../../store/ducks/signin";
import {connect} from "react-redux";

class SignInScreen extends React.Component {
    render() {
        return (
            <View>
                <WelcomeText />
            </View>
        );
    }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => bindActionCreators(SignInActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInScreen);
