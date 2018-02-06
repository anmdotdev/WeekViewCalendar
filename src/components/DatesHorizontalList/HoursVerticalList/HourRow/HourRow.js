// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

import HourHeaderBlock from './HourHeaderBlock/HourHeaderBlock';
import HourBlock from './HourBlock/HourBlock';

const hourRow = props => {
    return (
        <View style={styles.container}>
            <HourHeaderBlock
                hourValue={props.hourValue}
                hourSuffix={props.hourSuffix}
            />
            {props.dates.map(dateValue => (
                <HourBlock key={dateValue.id} date={dateValue.date} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        height: 80,
        paddingRight: 14
    }
});

export default hourRow;
