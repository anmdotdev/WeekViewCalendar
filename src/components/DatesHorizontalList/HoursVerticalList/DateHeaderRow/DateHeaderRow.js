import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import DateHeaderBlock from './DateHeaderBlock/DateHeaderBlock';

import { DAYS_SHORT_STRING } from '../../../../utils/constants';

const dateHeaderRow = props => {
	const additionalStyles = {
		backgroundColor: props.headerColor
	};

	const dateBlocks = props.myDatesData.map(date => {
		const isToday = date.id === 'date_' + props.todaysIndex;
		let hasEvent = false;

		props.myEventsData.map(event => {
			if (!hasEvent) {
				hasEvent =
					date.id === 'date_' + event.startDateIndexInDatesData ||
					date.id === 'date_' + event.endDateIndexInDatesData;
			}
		});

		return (
			<DateHeaderBlock
				key={date.id}
				day={DAYS_SHORT_STRING[date.day]}
				date={date.date}
				isToday={isToday}
				hasEvent={hasEvent}
			/>
		);
	});

	return (
		<View style={[styles.container, additionalStyles]}>{dateBlocks}</View>
	);
};

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
