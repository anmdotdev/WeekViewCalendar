import React from 'react';
import { View, StyleSheet } from 'react-native';

import HourHeaderBlock from './HourHeaderBlock/HourHeaderBlock';
import HourBlock from './HourBlock/HourBlock';

const hourRow = props => {
	const todaysDate = new Date();

	const hourBlocks = props.myDatesData.map(date => {
		const thisBlocksStartDateTime = new Date(
			date.year,
			date.month,
			date.date,
			props.rowID
		);

		const thisBlocksEndDateTime = new Date(
			date.year,
			date.month,
			date.date,
			props.rowID,
			59,
			59
		);

		const isPastTimeBlock = thisBlocksStartDateTime < todaysDate;

		const isCurrentTimeBlock =
			thisBlocksStartDateTime.getDate() === todaysDate.getDate() &&
			thisBlocksStartDateTime.getHours() === todaysDate.getHours() &&
			thisBlocksStartDateTime.getMonth() === todaysDate.getMonth() &&
			thisBlocksStartDateTime.getFullYear() === todaysDate.getFullYear();

		const events = props.myEventsData.filter(
			event =>
				(thisBlocksStartDateTime >= event.eventStartDateTime &&
					thisBlocksStartDateTime <= event.eventEndDateTime) ||
				(thisBlocksEndDateTime >= event.eventStartDateTime &&
					thisBlocksEndDateTime <= event.eventEndDateTime)
		);

		return (
			<HourBlock
				key={date.id}
				headerColor={props.headerColor}
				currentTime={props.currentTime}
				myStartDateTime={thisBlocksStartDateTime}
				myEndDateTime={thisBlocksEndDateTime}
				isPastTimeBlock={isPastTimeBlock}
				isCurrentTimeBlock={isCurrentTimeBlock}
				myEvents={events}
			/>
		);
	});

	return (
		<View style={styles.container}>
			<HourHeaderBlock
				rowID={props.rowID}
				hourValue={props.hourValue}
				hourSuffix={props.hourSuffix}
				myDate={props.myDatesData[0]}
			/>
			{hourBlocks}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		alignItems: 'center',
		height: 80,
		paddingRight: 15
	}
});

export default hourRow;
