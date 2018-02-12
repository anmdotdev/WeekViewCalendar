import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import EventBlock from './EventBlock/EventBlock';

export default class HourBlock extends Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.myEvents.length != this.props.myEvents.length;
	}

	render() {
		const {
			headerColor,
			currentTime,
			myStartDateTime,
			myEndDateTime,
			isPastTimeBlock,
			isCurrentTimeBlock,
			myEvents
		} = this.props;

		const currentTimeBlockStyles = {
			height: currentTime.minutes * 100 / 60 + '%',
			borderBottomWidth: 3,
			borderColor: headerColor
		};

		const timeBlockStyles = [
			isPastTimeBlock ? styles.pastTimeBlock : null,
			isCurrentTimeBlock ? currentTimeBlockStyles : null
		];

		const containerStyles = [styles.container];

		const eventContent = myEvents.map(event => {
			const isEventStartBlock =
				myStartDateTime <= event.eventStartDateTime;

			const isEventEndBlock = myEndDateTime >= event.eventEndDateTime;
			const isEventMidBlock = !isEventStartBlock && !isEventEndBlock;

			if (isEventStartBlock) {
				containerStyles.push({ borderBottomWidth: 0 });
			}
			if (isEventMidBlock) {
				containerStyles.push({
					borderTopWidth: 0,
					borderBottomWidth: 0
				});
			}
			if (isEventEndBlock) {
				containerStyles.push({ borderTopWidth: 0 });
			}

			return (
				<EventBlock
					key={event.id}
					isEventStartBlock={isEventStartBlock}
					isEventEndBlock={isEventEndBlock}
					isEventMidBlock={isEventMidBlock}
					color={headerColor}
					isPastTimeBlock={isPastTimeBlock}
					myEventData={event}
				/>
			);
		});

		return (
			<View style={containerStyles}>
				<View style={timeBlockStyles} />
				{eventContent}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		borderColor: 'rgba(245,245,245,1)',
		borderWidth: 0.4,
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},

	pastTimeBlock: {
		position: 'absolute',
		top: 0,
		backgroundColor: '#rgba(250,250,250,1)',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
