// @flow

import React from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

import MonthDetail from './MonthDetail/MonthDetail';
import TodayButton from './TodayButton/TodayButton';
import MoreButton from './MoreButton/MoreButton';

const appBar = props => {
	return (
		<View
			style={[styles.container, { backgroundColor: props.appBarColor }]}>
			<StatusBar
				backgroundColor={props.appBarColor}
				barStyle="light-content"
			/>

			<MonthDetail
				onPressHandler={props.monthDetailPressHandler}
				month="Feb"
				year="2018"
				weekNo="Week 5"
			/>

			<View style={styles.rightIconsView}>
				<TodayButton
					todaysDate="4"
					onPressHandler={props.todayButtonPressHandler}
				/>
				<MoreButton onPressHandler={props.moreButtonPressHandler} />
			</View>
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
	},

	rightIconsView: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginRight: 10
	}
});

export default appBar;
