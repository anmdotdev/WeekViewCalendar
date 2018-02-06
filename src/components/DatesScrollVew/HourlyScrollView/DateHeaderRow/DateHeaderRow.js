// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

import DateHeaderBlock from './DateHeaderBlock/DateHeaderBlock';

import { DAYS_SHORT_STRING } from '../../../../utils/constants';

const dateHeaderRow = props => (
	<View style={[styles.container, { backgroundColor: props.barColor }]}>
		{props.datesData.map(dateValue => (
			<DateHeaderBlock
				key={dateValue.id}
				day={DAYS_SHORT_STRING[dateValue.day]}
				date={dateValue.date}
			/>
		))}
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 12,
		paddingLeft: 25,
		paddingRight: 15,
		height: 75
	}
});

export default dateHeaderRow;
