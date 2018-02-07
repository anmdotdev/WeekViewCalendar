// @flow

import React, { Component } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';

import Touchable from '../../Shared/Touchable';

export default class MonthDetail extends Component {

    constructor(props) {
        super(props);
        this.opacity = new Animated.Value(0);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.month !== this.props.month || nextProps.year !== this.props.year) {
            this.opacity.setValue(0);

            Animated.timing(this.opacity, {
                duration: 500, // some number in milliseconds
                toValue: 1, // or whatever final opacity you'd like
                easing: Easing.inOut(Easing.quad)
            }).start();
        }
    }

    render() {
        Animated.timing(this.opacity, {
            duration: 500, // some number in milliseconds
            toValue: 1, // or whatever final opacity you'd like
            easing: Easing.inOut(Easing.quad)
        }).start();

        const opacity = this.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        return (
            <Touchable onPressHandler={this.props.onPressHandler} rippleBoundless>
                <View style={styles.container}>
                    <Animated.Text style={[styles.text, { opacity }]}>
                        {this.props.month + ' ' + this.props.year}
                    </Animated.Text>
                </View>
            </Touchable>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        padding: 5
    },

    text: {
        color: 'white',
        fontSize: 20
    }
});
