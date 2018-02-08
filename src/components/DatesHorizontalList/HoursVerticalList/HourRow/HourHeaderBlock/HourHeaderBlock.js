import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HourHeaderBlock extends PureComponent {
	render() {
		const recievedDate = new Date(
			this.props.date.year,
			this.props.date.month,
			this.props.date.date,
			this.props.rowID < 0 ? 0 : this.props.rowID
		);

		const todaysDate = new Date();

		const timePassedBlock =
			todaysDate > recievedDate ? (
				<View style={styles.timePassedBlock} />
			) : null;

		return (
			<View style={styles.timeBlock}>
				{timePassedBlock}
				<Text style={styles.hourText}>{this.props.hourValue}</Text>
				<Text style={styles.hourSuffixText}>
					{this.props.hourSuffix}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	timeBlock: {
		flexDirection: 'column',
		minWidth: 25,
		borderColor: '#ddd',
		borderWidth: 0.4,
		alignItems: 'center',
		height: '100%'
	},
	hourText: {
		fontSize: 12,
		color: '#000'
	},
	hourSuffixText: {
		fontSize: 8,
		color: '#000'
	},
	timePassedBlock: {
		position: 'absolute',
		top: 0,
		backgroundColor: '#eee',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
