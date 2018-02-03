// @flow

import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const singleDateHeading = props => (
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
		height: '100%',
		minWidth: 70
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

export default singleDateHeading;
