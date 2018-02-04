// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const dateHeading = props => (
	<View style={styles.container}>
		<Text style={styles.dayText}>{props.day}</Text>
		<Text style={styles.dateText}>{props.date}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	},
	dayText: {
		color: 'white',
		fontSize: 10
	},
	dateText: {
		color: 'white',
		fontSize: 20
	}
});

export default dateHeading;
