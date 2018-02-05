// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import AppBar from '../../components/AppBar/AppBar';
import DatesScrollView from '../../components/DatesScrollVew/DatesScrollView';

import { HOURS_LIST, APP_BAR_COLORS } from '../../utils/constants';

class WeeklyCalendar extends Component<{}> {
	constructor(props) {
		super(props);

		this.state = {
			screenOrientation:
				Dimensions.get('window').height > Dimensions.get('window').width
					? 'portrait'
					: 'landscape',
			datesAroundToday: {},
			todaysDate: new Date(),
			currentDateIndex: new Date().getDay() + 7
		};
	}

	componentWillMount() {
		this.generateDatesAroundToday();
	}

	generateDatesAroundToday = () => {
		const dates = new Array(21);

		const dateValue = new Date();
		const currentDateIndex = dateValue.getDay() + 7;

		dateValue.setDate(dateValue.getDate() - currentDateIndex);

		for (i = 0; i < dates.length; i++) {
			dates[i] = {
				id: 'date_' + i,
				day: dateValue.getDay(),
				date: dateValue.getDate(),
				month: dateValue.getMonth(),
				year: dateValue.getFullYear()
			};

			dateValue.setDate(dateValue.getDate() + 1);
		}

		this.setState({
			datesAroundToday: dates,
			currentDateIndex: currentDateIndex
		});
	};

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
					appBarColor={APP_BAR_COLORS.lightBlue}
					todaysDate={this.state.todaysDate}
					monthDetailPressHandler={this.monthDetailPressHandler}
					todayButtonPressHandler={this.todayButtonPressHandler}
					moreButtonPressHandler={this.moreButtonPressHandler}
				/>
				<DatesScrollView
					hoursList={HOURS_LIST}
					barColor={APP_BAR_COLORS.lightBlue}
					datesAroundToday={this.state.datesAroundToday}
					currentDateIndex={this.state.currentDateIndex}
					screenOrientation={this.state.screenOrientation}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: APP_BAR_COLORS.lightBlue
	}
});

export default WeeklyCalendar;
