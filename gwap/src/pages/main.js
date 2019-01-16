import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class MainPage extends Component {
    static navigationOptions = {
        title: 'Main'
    };

    render() {
        return (
            <View>
                <Text>Main</Text>
            </View>
        );
    }
}