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
			loading: true
		};
	}

	componentWillMount() {
		this.generateDatesData();
	}

	generateDatesData = () => {
		const datesData = new Array(70);

		const dateValue = new Date();
		dateValue.setDate(dateValue.getDate() - dateValue.getDay());

		for (i = 0; i < datesData.length; i++) {
			datesData[i] = {
				id: 'date_' + i,
				day: dateValue.getDay(),
				date: dateValue.getDate(),
				month: dateValue.getMonth(),
				year: dateValue.getFullYear()
			};

			dateValue.setDate(dateValue.getDate() + 1);
		}

		this.setState({ datesData });
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
		this.setState({
			screenOrientation:
				Dimensions.get('window').height > Dimensions.get('window').width
					? 'portrait'
					: 'landscape'
		});
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
					monthDetailPressHandler={this.monthDetailPressHandler}
					todayButtonPressHandler={this.todayButtonPressHandler}
					moreButtonPressHandler={this.moreButtonPressHandler}
				/>

				<DatesScrollView
					hoursList={HOURS_LIST}
					barColor={APP_BAR_COLORS.lightBlue}
					datesData={this.state.datesData}
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
