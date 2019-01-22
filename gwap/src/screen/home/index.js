import React from 'react';
import {View, Image} from 'react-native';
import {bindActionCreators} from "redux";
import HomeAuthActions from "../../store/ducks/homeAuth";
import {connect} from "react-redux";
import styles from './styles';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/gwap-logo.png')}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => bindActionCreators(HomeAuthActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
