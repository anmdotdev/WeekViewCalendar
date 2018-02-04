// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../../components/AppBar/AppBar';
import DateHeadings from '../../components/DateHeadings/DateHeadings';

class WeeklyCalendar extends Component<{}> {
	constructor(props) {
		super(props);

		this.state = {
			dateListData: [],
			daysShortString: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
			monthsShortString: [
				'JAN',
				'FEB',
				'MAR',
				'APR',
				'MAY',
				'JUN',
				'JUL',
				'AUG',
				'SEP',
				'OCT',
				'NOV',
				'DEC'
			],
			appBarColors: ['#00B0FF']
		};

		const datesData = [];
		const startingDate = new Date();

		for (i = 0; i < 50; i++) {
			startingDate.setDate(startingDate.getDate() + 1);

			datesData[i] = {
				key: 'data_' + i,
				day: this.state.daysShortString[startingDate.getDay()],
				date: startingDate.getDate(),
				month: this.state.monthsShortString[startingDate.getMonth()],
				year: startingDate.getFullYear()
			};
		}
	}

	monthDetailPressHandler = () => {
		alert('You pressed the month detail');
	};

	todayButtonPressHandler = () => {
		alert('You pressed the today button');
	};

	moreButtonPressHandler = () => {
		alert('You pressed the more button');
	};

	render() {
		return (
			<View style={styles.container}>
				<AppBar
					appBarColor={this.state.appBarColors[0]}
					monthDetailPressHandler={this.monthDetailPressHandler}
					todayButtonPressHandler={this.todayButtonPressHandler}
					moreButtonPressHandler={this.moreButtonPressHandler}
				/>
				<DateHeadings />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default WeeklyCalendar;
