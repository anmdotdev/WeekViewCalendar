// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const hourHeaderBlock = props => (
	<View style={styles.timeBlock}>
		<Text style={styles.hourText}>{props.hourValue}</Text>
		<Text style={styles.hourSuffixText}>{props.hourSuffix}</Text>
	</View>
);

const styles = StyleSheet.create({
	timeBlock: {
		flexDirection: 'column',
		minWidth: 25,
		borderColor: '#eee',
		borderWidth: 0.4,
		alignItems: 'center',
		height: '100%'
	},
	hourText: {
		fontSize: 12
	},
	hourSuffixText: {
		fontSize: 8
	}
});

export default hourHeaderBlock;
