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
			screenDimensions: {
				x: Dimensions.get('window').width,
				y: Dimensions.get('window').height
			},
			todaysDate: new Date(),
			currentlyVisibleDates: {},
			currentlyVisibleMonth: null,
			currentlyVisibleYear: null
		};

		Dimensions.addEventListener('change', this.onDimensionChange);
	}

	componentWillMount() {
		this.generateDatesAroundToday();
	}

	componentWillUnmount() {
		Dimensions.removeEventListener('change', this.onDimensionChange);
	}

	generateDatesAroundToday = () => {
		const daysInWeek = this.state.screenOrientation === 'portrait' ? 5 : 7;

		const dates = new Array(daysInWeek * 3);

		const dateValue = new Date();
		const currentDateIndex = dateValue.getDay() + daysInWeek;

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
			screenDimensions: {
				x: Dimensions.get('window').width,
				y: Dimensions.get('window').height
			},
			currentlyVisibleDates: dates,
			currentlyVisibleMonth: dates[daysInWeek].month,
			currentlyVisibleYear: dates[daysInWeek].year
		});
	};

	handleScrollToForData = direction => {
		const daysInWeek = this.state.screenOrientation === 'portrait' ? 5 : 7;

		const dates = [...this.state.currentlyVisibleDates];

		const dateValue = new Date(
			dates[0].year,
			dates[0].month,
			dates[0].date
		);

		if (direction === 'left') {
			dateValue.setDate(dateValue.getDate() - daysInWeek);
		} else {
			dateValue.setDate(dateValue.getDate() + daysInWeek);
		}

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
			currentlyVisibleDates: dates,
			currentlyVisibleMonth: dates[daysInWeek].month,
			currentlyVisibleYear: dates[daysInWeek].year
		});
	};

	onDimensionChange = () => {
		const screenOrientation =
			Dimensions.get('window').height > Dimensions.get('window').width
				? 'portrait'
				: 'landscape';
		this.setState({
			screenOrientation: screenOrientation
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
					currentlyVisibleMonth={this.state.currentlyVisibleMonth}
					currentlyVisibleYear={this.state.currentlyVisibleYear}
					monthDetailPressHandler={this.monthDetailPressHandler}
					todayButtonPressHandler={this.todayButtonPressHandler}
					moreButtonPressHandler={this.moreButtonPressHandler}
				/>
				<DatesScrollView
					hoursList={HOURS_LIST}
					barColor={APP_BAR_COLORS.lightBlue}
					currentlyVisibleDates={this.state.currentlyVisibleDates}
					currentDateIndex={this.state.currentDateIndex}
					screenOrientation={this.state.screenOrientation}
					screenDimensions={this.state.screenDimensions}
					handleScrollToForData={this.handleScrollToForData}
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
