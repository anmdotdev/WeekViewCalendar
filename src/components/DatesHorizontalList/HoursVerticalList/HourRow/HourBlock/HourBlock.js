// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

const hourBlock = props => {
	const recievedDate = new Date(
		props.date.year,
		props.date.month,
		props.date.date,
		props.rowID
	);

	const todaysDate = new Date();

	const controlTimeBlockHeight =
		recievedDate.getDate() === todaysDate.getDate() &&
		recievedDate.getHours() === todaysDate.getHours();

	const timeBlockHeight = controlTimeBlockHeight
		? {
				height: props.currentTime.minutes * 100 / 60 + '%',
				borderBottomWidth: 2,
				borderColor: props.headerColor
			}
		: null;

	const timePassedBlock =
		todaysDate > recievedDate ? (
			<View style={[styles.timePassedBlock, timeBlockHeight]} />
		) : null;

	return <View style={styles.container}>{timePassedBlock}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		borderColor: '#ddd',
		borderWidth: 0.4,
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	addButton: {
		flex: 1,
		backgroundColor: '#00B0FF',
		borderRadius: 5,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	timePassedBlock: {
		position: 'absolute',
		top: 0,
		backgroundColor: '#eee',
		opacity: 0.5,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default hourBlock;
