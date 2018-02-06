// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Touchable from '../../Shared/Touchable';

const moreButton = props => (
    <Touchable onPressHandler={props.onPressHandler} rippleBoundless>
        <View style={styles.settingsButton}>
            <Icon size={30} name="md-more" color="white" />
        </View>
    </Touchable>
);

const styles = StyleSheet.create({
    settingsButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,
        width: 30,
        height: 30
    }
});

export default moreButton;
