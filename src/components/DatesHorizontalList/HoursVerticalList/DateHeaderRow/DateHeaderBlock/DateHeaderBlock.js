// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const dateHeaderBlock = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.dayText}>{props.day}</Text>
			<Text style={styles.dateText}>{props.date}</Text>
			{props.hasEvent || props.isToday ? (
				<Text style={styles.eventDot}>.</Text>
			) : null}
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
	}
});

export default dateHeaderBlock;
