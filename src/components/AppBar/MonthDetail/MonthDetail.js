// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Touchable from '../../Shared/Touchable';

const monthDetail = props => (
    <Touchable onPressHandler={props.onPressHandler} rippleBoundless>
        <View style={styles.container}>
            <Text style={styles.text}>{props.month + ' ' + props.year}</Text>
        </View>
    </Touchable>
);

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

export default monthDetail;
