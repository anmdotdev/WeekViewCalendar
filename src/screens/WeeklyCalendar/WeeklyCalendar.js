// @flow

import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';

import HeadingBar from '../../components/HeadingBar/HeadingBar';
import DateHeadingFlatList from '../../components/DateHeadingFlatList/DateHeadingFlatList';
import TimingFlatList from '../../components/TimingFlatList/TimingFlatList';

class WeeklyCalendar extends Component<{}> {
	constructor(props) {
		super(props);

		const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
		const months = [
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
		];

		const datesData = [];
		const startingDate = new Date();

		datesData[0] = {
			key: 'data_' + 0,
			day: days[startingDate.getDay()],
			date: startingDate.getDate(),
			month: months[startingDate.getMonth()],
			year: startingDate.getFullYear()
		};

		for (i = 1; i < 50; i++) {
			startingDate.setDate(startingDate.getDate() + 1);

			datesData[i] = {
				key: 'data_' + i,
				day: days[startingDate.getDay()],
				date: startingDate.getDate(),
				month: months[startingDate.getMonth()],
				year: startingDate.getFullYear()
			};
		}

		this.state = {
			dateListData: datesData,
			day: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
		};

		console.log(this.state.dateListData);
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#00B0FF" barStyle="light-content" />
				<HeadingBar />
				<DateHeadingFlatList listData={this.state.dateListData} />

				{/*
				<ScrollView style={styles.scrollView}>
					<TimingFlatList listData={this.state.dateListData} />
				</ScrollView>
                */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	scrollView: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	}
});

export default WeeklyCalendar;
