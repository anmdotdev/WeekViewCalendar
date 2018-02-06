// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const hourBlock = props => {
    const clickBlock = (
        <View style={styles.addButton}>
            <Icon size={12} name="md-add" color="white" />
        </View>
    );

    return <View style={styles.container} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderColor: '#eee',
        borderWidth: 0.4,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButton: {
        flex: 1,
        backgroundColor: '#00B0FF',
        borderRadius: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default hourBlock;
