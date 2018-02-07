// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const hourHeaderBlock = props => {
	const recievedDate = new Date(
		props.date.year,
		props.date.month,
		props.date.date,
		props.rowID < 0 ? 0 : props.rowID
	);

	const todaysDate = new Date();

	const timePassedBlock =
		todaysDate > recievedDate ? (
			<View style={styles.timePassedBlock} />
		) : null;

	return (
		<View style={styles.timeBlock}>
			{timePassedBlock}
			<Text style={styles.hourText}>{props.hourValue}</Text>
			<Text style={styles.hourSuffixText}>{props.hourSuffix}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	timeBlock: {
		flexDirection: 'column',
		minWidth: 25,
		borderColor: '#ddd',
		borderWidth: 0.4,
		alignItems: 'center',
		height: '100%'
	},
	hourText: {
		fontSize: 12,
		color: '#000'
	},
	hourSuffixText: {
		fontSize: 8,
		color: '#000'
	},
	timePassedBlock: {
		position: 'absolute',
		top: 0,
		backgroundColor: '#eee',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default hourHeaderBlock;
