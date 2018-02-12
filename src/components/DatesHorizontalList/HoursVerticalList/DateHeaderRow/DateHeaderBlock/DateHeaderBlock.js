import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DateHeaderBlock extends PureComponent {
	render() {
		const isTodayViewStyles = [
			styles.isToday,
			this.props.hasEvent ? { height: 60 } : null
		];

		const isTodayBorderView = this.props.isToday ? (
			<View style={isTodayViewStyles} />
		) : null;

		const eventDot = this.props.hasEvent ? (
			<Text style={styles.eventDot}>.</Text>
		) : null;

		return (
			<View style={styles.container}>
				{isTodayBorderView}
				<Text style={styles.dayText}>{this.props.day}</Text>
				<Text style={styles.dateText}>{this.props.date}</Text>
				{eventDot}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: '100%'
	},
	dayText: {
		color: 'white',
		fontSize: 11
	},
	dateText: {
		color: 'white',
		marginTop: 3,
		fontSize: 17
	},
	eventDot: {
		color: 'white',
		fontSize: 35,
		marginTop: -25
	},
	isToday: {
		position: 'absolute',
		top: -5,
		width: 48,
		height: 52,
		borderRadius: 5,
		borderColor: 'rgba(255,255,255,0.8)',
		borderWidth: 1.5
	}
});
