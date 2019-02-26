import React from 'react';
import {View} from 'react-native';
import {bindActionCreators} from "redux";
import SignUpActions from "../../store/ducks/signup";
import {connect} from "react-redux";
import styles from './styles';
import Logo from "../../components/logo";
import Form from "../../components/signup/form";
import ButtonSubmit from "../../components/button";
import DropdownAlert from 'react-native-dropdownalert';
import {Text} from 'react-native-elements';


class SignUpScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    signUp = async () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <DropdownAlert ref={ref => this.dropdown = ref} closeInterval={6000} />
                <Logo style={{height: 200}}/>
                <Form data={this.props.signup.user}/>
                <ButtonSubmit onClick={async () => await this.props.signInRequest(this.props.signup.user)}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => bindActionCreators(SignUpActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpScreen);
