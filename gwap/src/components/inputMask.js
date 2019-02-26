import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {TextInputMask} from "react-native-masked-text";
import If from "./input";

export default class InputMask extends Component {
    render() {
        return (
            <View style={styles.inputWrapper}>
                <Image source={this.props.sourceStart} style={styles.inlineImgLeft} />
                <TextInputMask
                    style={styles.input}
                    type={this.props.maskType}
                    options={this.props.options}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    onChangeText={this.props.onChangeText}
                />
                <If condition={this.props.sourceEnd !== undefined}>
                    <Image source={this.props.sourceEnd} style={styles.inlineImgRight} />
                </If>
            </View>
        );
    }
}

InputMask.propTypes = {
    sourceStart: PropTypes.number.isRequired,
    sourceEnd: PropTypes.number,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
    onChangeText: PropTypes.func,
    maskType: PropTypes.string.isRequired,
    options: PropTypes.object
};

const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
    },
    inputWrapper: {
        flex: 1,
        maxHeight: 52
    },
    inlineImgLeft: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 30,
        top: 9,
    },
    inlineImgRight: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        right: 30,
        top: 9,
    },
});
