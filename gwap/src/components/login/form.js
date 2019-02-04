import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, TouchableOpacity,} from 'react-native';
import userImg from '../../assets/images/user.png';
import userValidImg from '../../assets/images/user-valid.png';
import padlockCloseImg from '../../assets/images/padlock-close.png';
import padlockOpenImg from '../../assets/images/padlock-open.png';
import eyeImg from '../../assets/images/eye-black.png';
import Input from "../input";
import {EMAIL_VALID_REGEX, PASSWORD_VALID_REGEX} from "../../utils/constants";
import PropTypes from 'prop-types';

// import ButtonSubmit from './ButtonSubmit';
// import SignupSection from './SignupSection';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
            userValid: false
        };
        this.showPass = this.showPass.bind(this);
        this.onChangeEmailUser = this.onChangeEmailUser.bind(this);
        this.onChangePasswordlUser = this.onChangePasswordlUser.bind(this);
    }

    showPass() {
        this.state.press === false
            ? this.setState({showPass: false, press: true, userValid: this.state.userValid})
            : this.setState({showPass: true, press: false, userValid: this.state.userValid});
    }

    onChangeEmailUser(text) {
        const isValidEmail = (text) => EMAIL_VALID_REGEX.test(text);
        const state = {...this.state}
        if (text) {
            state.userValid = isValidEmail(text);
            if (state.userValid) {
                this.props.data.email = text;
            }
        } else {
            state.userValid = false;
        }
        this.setState(state);
    }

    onChangePasswordlUser(text) {
        const isValidPassword = (text) => PASSWORD_VALID_REGEX.test(text);
        const state = {...this.state}
        if (text) {
            if (isValidPassword(text)) {
                this.props.data.password = text;
            }
        } else {
            state.userValid = false;
        }
        this.setState(state);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Input
                    source={this.state.userValid? userValidImg : userImg}
                    placeholder="E-mail"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.user?.email}
                    onChangeText={this.onChangeEmailUser}
                />
                <Input
                    source={this.state.showPass? padlockCloseImg : padlockOpenImg }
                    secureTextEntry={this.state.showPass}
                    placeholder="Senha"
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    value={this.state.user?.password}
                    onChangeText={this.onChangePasswordlUser}
                    autoCorrect={false}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.btnEye}
                    onPress={this.showPass}>
                    <Image source={eyeImg} style={styles.iconEye} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

Form.propTypes = {
    data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    btnEye: {
        position: 'absolute',
        top: 58,
        right: 28,
    },
    iconEye: {
        width: 35,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
});
