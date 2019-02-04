import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/gwap-logo.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    }
});
