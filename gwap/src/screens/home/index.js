import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {bindActionCreators} from "redux";
import HomeAuthActions from "../../store/ducks/homeAuth";
import {connect} from "react-redux";
import styles from './styles';

class HomeScreen extends React.Component {

    state = {
        isLoggedIn: false
    }

    render() {
        return (
            <View style={styles.loginContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('signIn')}
                    activeOpacity={1}>
                    <Text >Go to signin</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('signUp')}
                    activeOpacity={1}>
                    <Text >Go to signup</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => bindActionCreators(HomeAuthActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
