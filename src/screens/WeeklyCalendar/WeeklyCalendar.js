// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../../components/AppBar/AppBar';
import DateHeadings from '../../components/DateHeadings/DateHeadings';
import HourlyScrollView from '../../components/HourlyScrollView/HourlyScrollView';

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
			hoursList: [
				'12',
				'1',
				'2',
				'3',
				'4',
				'5',
				'6',
				'7',
				'8',
				'9',
				'10',
				'11',
				'12',
				'1',
				'2',
				'3',
				'4',
				'5',
				'6',
				'7',
				'8',
				'9',
				'10',
				'11'
			],
			appBarColors: {
				lightBlue: '#00B0FF'
			}
		};
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
					appBarColor={this.state.appBarColors.lightBlue}
					monthDetailPressHandler={this.monthDetailPressHandler}
					todayButtonPressHandler={this.todayButtonPressHandler}
					moreButtonPressHandler={this.moreButtonPressHandler}
				/>
				<DateHeadings barColor={this.state.appBarColors.lightBlue} />
				<HourlyScrollView hoursList={this.state.hoursList} />
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
