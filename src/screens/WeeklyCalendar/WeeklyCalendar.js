// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import AppBar from '../../components/AppBar/AppBar';
import DatesScrollView from '../../components/DatesScrollVew/DatesScrollView';

import { HOURS_LIST, APP_BAR_COLORS } from '../../utils/constants';

class WeeklyCalendar extends Component<{}> {
	constructor(props) {
		super(props);

		Dimensions.addEventListener('change', this.onDimensionChange);

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
			datesData: [],
			segregatedData: [],
			loadingDatesData: true,
			currentPage: 0
		};
	}

	componentWillMount() {
		this.initializeDatesState();
	}

	initializeDatesState = () => {
		const datesData = new Array(35);

		const dateValue = new Date();
		dateValue.setDate(dateValue.getDate() - dateValue.getDay());

		for (i = 0; i < datesData.length; i++) {
			datesData[i] = {
				id: 'date_' + i,
				day: dateValue.getDay(),
				date: dateValue.getDate(),
				month: dateValue.getMonth(),
				year: dateValue.getFullYear(),
				isToday:
					dateValue.getDate() === this.state.todaysDate.getDate() &&
					dateValue.getMonth() === this.state.todaysDate.getMonth() &&
					dateValue.getFullYear() ===
						this.state.todaysDate.getFullYear()
			};

			dateValue.setDate(dateValue.getDate() + 1);
		}

		this.segregateData(
			datesData,
			this.state.screenOrientation === 'portrait' ? 5 : 7
		);

		this.setState({ datesData, loadingDatesData: false });
	};

	segregateData = (datesData, daysInWeek) => {
		let segregatedData = [];

		for (i = 0; i < datesData.length / daysInWeek; i++) {
			const data = [];

			for (j = 0; j < daysInWeek; j++) {
				data[j] = datesData[i * daysInWeek + j];
			}

			segregatedData[i] = {
				key: 'id_' + i,
				datesData: data,
				weekMonth: data[0].month,
				weekYear: data[0].year
			};
		}

		this.setState({ segregatedData });
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

	onDimensionChange = () => {
		const screenOrientation =
			Dimensions.get('window').height > Dimensions.get('window').width
				? 'portrait'
				: 'landscape';
		const screenDimensions = {
			x: Dimensions.get('window').width,
			y: Dimensions.get('window').width
		};

		this.segregateData(
			this.state.datesData,
			screenOrientation === 'portrait' ? 5 : 7
		);

		this.setState({ screenOrientation, screenDimensions });
	};

	componentWillUnmount() {
		Dimensions.removeEventListener('change', this.onDimensionChange);
	}

	render() {
		return (
			<View style={styles.container}>
				<AppBar
					appBarColor={APP_BAR_COLORS.lightBlue}
					todaysDate={this.state.todaysDate}
					currentlyVisibleMonth={
						this.state.segregatedData[this.state.currentPage]
							.weekMonth
					}
					currentlyVisibleYear={
						this.state.segregatedData[this.state.currentPage]
							.weekYear
					}
					monthDetailPressHandler={this.monthDetailPressHandler}
					todayButtonPressHandler={this.todayButtonPressHandler}
					moreButtonPressHandler={this.moreButtonPressHandler}
				/>
				<DatesScrollView
					hoursList={HOURS_LIST}
					barColor={APP_BAR_COLORS.lightBlue}
					datesData={this.state.segregatedData}
					screenOrientation={this.state.screenOrientation}
					screenDimensions={this.state.screenDimensions}
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
