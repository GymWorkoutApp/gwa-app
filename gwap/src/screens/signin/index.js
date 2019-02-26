import React from 'react';
import {View} from 'react-native';
import {bindActionCreators} from "redux";
import SignInActions from "../../store/ducks/signin";
import {connect} from "react-redux";
import styles from './styles';
import Logo from "../../components/logo";
import Form from "../../components/signin/form";
import ButtonSubmit from "../../components/button";
import DropdownAlert from 'react-native-dropdownalert';
import {translateError} from "../../utils/translate";
import {Text} from 'react-native-elements';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

// import { LoginButton, AccessToken } from 'react-native-fbsdk';

class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        try {
             await GoogleSignin.hasPlayServices({ autoResolve: true });

        } catch (err) {
            console.error('play services are not available');
        }
        await GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            iosClientId: '70401825473-t6ebqol6osl01nbrnp51n280s4trrmbq.apps.googleusercontent.com',
            webClientId: '70401825473-mq1j6fcuq192sp9fnt3m9qsb2mpq4tud.apps.googleusercontent.com',

        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.signin.error != null) {
            this.dropdown.alertWithType('error', 'Acesso', translateError(this.props.signin.error.error_description));
        }
    }

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('SIGN_IN_CANCELLED');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('IN_PROGRESS');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('PLAY_SERVICES_NOT_AVAILABLE');
            } else {
                console.log('dont');
            }
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1.5}}>
                    <DropdownAlert ref={ref => this.dropdown = ref} closeInterval={6000} />
                    <Logo  style={{height: 300}}/>
                    <Form data={this.props.signin.user}/>
                    <ButtonSubmit onClick={async () => await this.props.signInRequest(this.props.signin.user)}/>
                </View>
                <View style={styles.divisor}>
                    <Text style={styles.divisorText}>ou acesse com</Text>
                </View>
                <View style={styles.social}>
                    <GoogleSigninButton
                        style={styles.socialGoogleSigninButton}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Auto}
                        onPress={this.signIn.bind(this)}
                        disabled={this.props.signin.isLoading} />

                </View>

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
