// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DateHeading from './DateHeading/DateHeading';

const dateHeadings = props => (
	<View style={[styles.container, { backgroundColor: props.barColor }]}>
		<View style={styles.timeBlock} />
		<DateHeading day="SUN" date="4" />
		<DateHeading day="MON" date="5" hasEvent />
		<DateHeading day="TUE" date="6" />
		<DateHeading day="WED" date="7" />
		<DateHeading day="THU" date="8" />
		<View style={styles.timeBlockRight} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 80,
		paddingTop: 15
	},
	timeBlock: {
		minWidth: 25
	},
	timeBlockRight: {
		minWidth: 15
	}
});

export default dateHeadings;
