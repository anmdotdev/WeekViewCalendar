// @flow

import React from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

import MonthDetail from './MonthDetail/MonthDetail';
import TodayButton from './TodayButton/TodayButton';

import { MONTHS_SHORT_STRING } from '../../utils/constants';

const appBar = props => {
	const additionalStyles = {
		backgroundColor: props.appBarColor,
		height:
			props.screenOrientation === 'portrait'
				? Platform.OS == 'ios' ? 70 : 55
				: Platform.OS == 'ios' ? 50 : 25
	};

	return (
		<View style={[styles.container, additionalStyles]}>
			<StatusBar
				backgroundColor={props.appBarColor}
				barStyle="light-content"
			/>

			<MonthDetail
				month={MONTHS_SHORT_STRING[props.currentMonth]}
				year={props.currentYear}
				screenOrientation={props.screenOrientation}
			/>

			<TodayButton
				todaysDate={props.todaysDate.date}
				onPressHandler={props.todayButtonPressHandler}
				screenOrientation={props.screenOrientation}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: Platform.OS == 'ios' ? 20 : 0,
		height: Platform.OS == 'ios' ? 70 : 55
	}
});

export default appBar;
