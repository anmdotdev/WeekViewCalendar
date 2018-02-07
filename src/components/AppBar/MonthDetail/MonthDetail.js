// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const monthlyDetail = props => (
    <View style={styles.container}>
        <Text style={styles.text}>
            {props.month + ' ' + props.year}
        </Text>
    </View>
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

export default monthlyDetail;
