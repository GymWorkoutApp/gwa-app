import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import PropTypes from "prop-types";
import Form from "./signup/form";

export default class Logo extends Component {
    render() {
        return (
            <View style={[styles.logoContainer, this.props.style]}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/gwap-logo.png')}
                />
            </View>
        );
    }
}

Logo.propTypes = {
    style: PropTypes.object,
};


const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    }
});
