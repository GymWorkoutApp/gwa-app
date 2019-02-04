import React from 'react';
import {View} from 'react-native';
import {bindActionCreators} from "redux";
import SignInActions from "../../store/ducks/signin";
import {connect} from "react-redux";
import styles from './styles';
import Logo from "../../components/login/logo";
import Form from "../../components/login/form";
import ButtonSubmit from "../../components/login/button";

class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        user: {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form data={this.state.user}/>
                <ButtonSubmit onClick={async () => {
                    console.log(this.state);
                    await this.props.signInRequest(this.state.user);
                }}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => bindActionCreators(SignInActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInScreen);
