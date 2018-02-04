// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../../components/AppBar/AppBar';
import DatesScrollView from '../../components/DatesScrollVew/DatesScrollView';

import { HOURS_LIST, APP_BAR_COLORS } from '../../utils/constants';

class WeeklyCalendar extends Component<{}> {
	constructor(props) {
		super(props);

		this.state = {
			todaysDate: new Date(),
			previousWeek: {},
			thisWeek: {},
			nextWeek: {}
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
					appBarColor={APP_BAR_COLORS.lightBlue}
					monthDetailPressHandler={this.monthDetailPressHandler}
					todayButtonPressHandler={this.todayButtonPressHandler}
					moreButtonPressHandler={this.moreButtonPressHandler}
				/>
				<DatesScrollView
					hoursList={HOURS_LIST}
					barColor={APP_BAR_COLORS.lightBlue}
				/>
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
