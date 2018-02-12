import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class EventBlock extends PureComponent {
	render() {
		const {
			isEventStartBlock,
			isEventMidBlock,
			isEventEndBlock,
			isPastTimeBlock,
			myEventData,
			color
		} = this.props;

		const eventStartBlockStyles = {
			top: myEventData.eventStartDateTime.getMinutes() * 100 / 60 + '%',
			borderColor: color,
			opacity: isPastTimeBlock ? 0.3 : 1,
			borderTopWidth: 2,
			borderLeftWidth: 2,
			borderRightWidth: 2
		};

		const eventMidBlockStyles = {
			height: '100%',
			borderColor: color,
			opacity: isPastTimeBlock ? 0.3 : 1,
			borderLeftWidth: 2,
			borderRightWidth: 2
		};

		const eventEndBlockStyles = {
			height: myEventData.eventEndDateTime.getMinutes() * 100 / 60 + '%',
			borderColor: color,
			opacity: isPastTimeBlock ? 0.3 : 1,
			borderBottomWidth: 2,
			borderLeftWidth: 2,
			borderRightWidth: 2
		};

		const eventBlockStyles = [
			styles.container,
			isEventStartBlock ? eventStartBlockStyles : null,
			isEventMidBlock ? eventMidBlockStyles : null,
			isEventEndBlock ? eventEndBlockStyles : null
		];

		const eventNameText = isEventStartBlock ? (
			<Text style={styles.text}>{myEventData.eventName}</Text>
		) : null;

		return <View style={eventBlockStyles}>{eventNameText}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#rgba(248,248,248,1)',
		position: 'absolute',
		width: '100%',
		height: '100%',
		padding: 3
	},
	text: {
		fontSize: 11
	}
});
