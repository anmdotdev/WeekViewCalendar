// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Touchable from '../../Shared/Touchable';

const monthDetail = props => (
	<Touchable onPressHandler={props.onPressHandler} rippleBoundless>
		<View style={styles.monthYearView}>
			<Text style={styles.textMonth}>{props.month}</Text>
			<View>
				<Text style={styles.textYear}>{props.year}</Text>
				<Text style={styles.textWeek}>{props.weekNo}</Text>
			</View>
		</View>
	</Touchable>
);

const styles = StyleSheet.create({
	monthYearView: {
		flexDirection: 'row',
		marginLeft: 10,
		padding: 10,
		paddingTop: 5,
		paddingBottom: 5
	},

	textMonth: {
		color: 'white',
		fontSize: 24
	},

	textYear: {
		color: 'white',
		marginTop: 3,
		marginLeft: 8,
		fontSize: 10
	},

	textWeek: {
		color: 'white',
		marginLeft: 8,
		fontSize: 10
	}
});

export default monthDetail;
