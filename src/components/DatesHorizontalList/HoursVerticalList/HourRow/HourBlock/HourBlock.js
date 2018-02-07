// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

const hourBlock = props => {
	const thisBlocksDateTime = new Date(
		props.date.year,
		props.date.month,
		props.date.date,
		props.rowID
	);

	const todaysDate = new Date();

	const isPastTimeBlock = thisBlocksDateTime < todaysDate;

	const isCurrentTimeBlock =
		thisBlocksDateTime.getDate() === todaysDate.getDate() &&
		thisBlocksDateTime.getHours() === todaysDate.getHours();

	const currentTimeBlockStyles = {
		height: props.currentTime.minutes * 100 / 60 + '%',
		borderBottomWidth: 2,
		borderColor: props.headerColor
	};

	const timeBlockStyles = [
		isPastTimeBlock ? styles.pastTimeBlock : null,
		isCurrentTimeBlock ? currentTimeBlockStyles : null
    ];

    const events = this.props.date.events;
    
    const hasEvent = thisBlocksDateTime >

	return (
		<View style={styles.container}>
			<View style={timeBlockStyles} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		borderColor: '#ddd',
		borderWidth: 0.4,
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	pastTimeBlock: {
		position: 'absolute',
		top: 0,
		backgroundColor: '#eee',
		opacity: 0.5,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default hourBlock;
