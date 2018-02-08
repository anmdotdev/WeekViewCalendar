import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HourBlock extends PureComponent {
	render() {
		const thisBlocksStartDateTime = new Date(
			this.props.date.year,
			this.props.date.month,
			this.props.date.date,
			this.props.rowID
		);

		const thisBlocksEndDateTime = new Date(
			this.props.date.year,
			this.props.date.month,
			this.props.date.date,
			this.props.rowID,
			59
		);

		const todaysDate = new Date();

		const isPastTimeBlock = thisBlocksStartDateTime < todaysDate;

		const isCurrentTimeBlock =
			thisBlocksStartDateTime.getDate() === todaysDate.getDate() &&
			thisBlocksStartDateTime.getHours() === todaysDate.getHours();

		const currentTimeBlockStyles = {
			height: this.props.currentTime.minutes * 100 / 60 + '%',
			borderBottomWidth: 3,
			borderColor: this.props.headerColor
		};

		const timeBlockStyles = [
			isPastTimeBlock ? styles.pastTimeBlock : null,
			isCurrentTimeBlock ? currentTimeBlockStyles : null
		];

		const events = this.props.date.events.filter(
			event =>
				(thisBlocksStartDateTime >= event.eventStartDateTime &&
					thisBlocksStartDateTime <= event.eventEndDateTime) ||
				(thisBlocksEndDateTime >= event.eventStartDateTime &&
					thisBlocksEndDateTime <= event.eventEndDateTime)
		);

		const hasEvent = events.length > 0;
		const isEventStartBlock =
			hasEvent && thisBlocksStartDateTime <= events[0].eventStartDateTime;
		const isEventEndBlock =
			hasEvent && thisBlocksEndDateTime >= events[0].eventEndDateTime;

		const hasEvent_Styles = {
			position: 'absolute',
			width: '100%',
			height: '100%',
			backgroundColor: '#eee',
			borderLeftWidth: 1,
			borderRightWidth: 1,
			borderColor: '#ddd'
		};

		const eventStartBlockStyles = isEventStartBlock
			? {
					position: 'absolute',
					top:
						events[0].eventStartDateTime.getMinutes() * 100 / 60 +
						'%',
					borderTopWidth: 2,
					borderLeftWidth: 1,
					borderRightWidth: 1,
					borderColor: '#ddd'
				}
			: null;

		const eventEndBlockStyles = isEventEndBlock
			? {
					position: 'absolute',
					height:
						events[0].eventStartDateTime.getMinutes() * 100 / 60 +
						'%',
					borderBottomWidth: 2,
					borderLeftWidth: 1,
					borderRightWidth: 1,
					borderColor: '#ddd'
				}
			: null;

		const eventBlockStyles = [
			hasEvent ? hasEvent_Styles : null,
			eventStartBlockStyles,
			eventEndBlockStyles
		];

		const containerStyles = [
			styles.container,
			hasEvent && !isEventStartBlock && !isEventEndBlock
				? {
						borderWidth: 0,
						borderLeftWidth: 0.4,
						borderRightWidth: 0.4
					}
				: null,
			isEventStartBlock ? { borderBottomWidth: 0 } : null,
			isEventEndBlock ? { borderTopWidth: 0 } : null
		];

		const eventNameText = isEventStartBlock ? (
			<Text>{events[0].eventName}</Text>
		) : null;

		return (
			<View style={containerStyles}>
				<View style={timeBlockStyles} />
				<View style={eventBlockStyles}>{eventNameText}</View>
			</View>
		);
	}
}

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
