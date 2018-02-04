// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DateHeading from './DateHeading/DateHeading';

const dateHeadings = props => (
	<View style={styles.container}>
		<Text style={styles.timeText}>Time</Text>
		<DateHeading day="SUN" date="4" />
		<DateHeading day="MON" date="5" />
		<DateHeading day="TUE" date="6" />
		<DateHeading day="WED" date="7" />
		<DateHeading day="THU" date="8" />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#00B0FF',
		alignItems: 'center',
		height: 60
	},
	timeText: {
		color: 'white',
		fontSize: 10,
		marginLeft: 10
	}
});

export default dateHeadings;
