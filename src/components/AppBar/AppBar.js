import React, { PureComponent } from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

import MonthDetail from './MonthDetail/MonthDetail';
import TodayButton from './TodayButton/TodayButton';

import { MONTHS_SHORT_STRING } from '../../utils/constants';

export default class AppBar extends PureComponent {
	render() {
		const additionalStyles = {
			backgroundColor: this.props.appBarColor,
			height:
				this.props.screenOrientation === 'portrait'
					? Platform.OS == 'ios' ? 70 : 55
					: Platform.OS == 'ios' ? 50 : 25
		};

		return (
			<View style={[styles.container, additionalStyles]}>
				<StatusBar
					backgroundColor={this.props.appBarColor}
					barStyle="light-content"
				/>

				<MonthDetail
					month={MONTHS_SHORT_STRING[this.props.currentMonth]}
					year={this.props.currentYear}
					screenOrientation={this.props.screenOrientation}
				/>

				<TodayButton
					todaysDate={this.props.todaysDate.date}
					onPressHandler={this.props.todayButtonPressHandler}
					screenOrientation={this.props.screenOrientation}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: Platform.OS == 'ios' ? 20 : 0,
		height: Platform.OS == 'ios' ? 70 : 55
	}
});
