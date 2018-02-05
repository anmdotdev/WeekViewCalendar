// @flow

import React from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

import MonthDetail from './MonthDetail/MonthDetail';
import TodayButton from './TodayButton/TodayButton';
import MoreButton from './MoreButton/MoreButton';

import { MONTHS_SHORT_STRING } from '../../utils/constants';

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
				month={MONTHS_SHORT_STRING[props.todaysDate.getMonth()]}
				year={props.todaysDate.getFullYear()}
			/>

			<View style={styles.rightIconsView}>
				<TodayButton
					todaysDate={props.todaysDate.getDate()}
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
