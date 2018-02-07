// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const dateHeaderBlock = props => {
	const isToday = props.isToday ? (
		<View
			style={[styles.isToday, props.hasEvent ? { height: 50 } : null]}
		/>
	) : null;

	return (
		<View style={styles.container}>
			{isToday}
			<Text style={styles.dayText}>{props.day}</Text>
			<Text style={styles.dateText}>{props.date}</Text>
			{props.hasEvent ? <Text style={styles.eventDot}>.</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: '100%'
	},
	dayText: {
		color: 'white',
		fontSize: 12
	},
	dateText: {
		color: 'white',
		fontSize: 18
	},
	eventDot: {
		color: 'white',
		fontSize: 35,
		marginTop: -25
	},
	isToday: {
		position: 'absolute',
		top: -5,
		width: 52,
		height: 52,
		borderRadius: 5,
		borderColor: 'rgba(255,255,255,0.6)',
		borderWidth: 1.5
	}
});

export default dateHeaderBlock;
