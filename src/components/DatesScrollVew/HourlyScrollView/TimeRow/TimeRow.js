// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HourBox from './HourBox/HourBox';

const timeRow = props => (
	<View style={styles.container}>
		<View style={styles.timeBlock}>
			<Text style={styles.hourText}>{props.hourValue}</Text>
			<Text style={styles.hourSuffixText}>{props.hourSuffixValue}</Text>
		</View>
		<HourBox />
		<HourBox />
		<HourBox />
		<HourBox />
		<HourBox />
		<View style={styles.emptyBlockRight} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 80
	},
	timeBlock: {
		flexDirection: 'column',
		minWidth: 25,
		borderColor: '#eee',
		borderWidth: 0.4,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	},
	hourText: {
		fontSize: 12
	},
	hourSuffixText: {
		fontSize: 8
	},
	emptyBlockRight: {
		flexDirection: 'column',
		minWidth: 14,
		alignItems: 'center',
		height: '100%'
	}
});

export default timeRow;
