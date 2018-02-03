// @flow

import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import HeadingBar from '../../components/HeadingBar/HeadingBar';

class WeeklyCalendar extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#00B0FF" barStyle="light-content" />
				<HeadingBar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	}
});

export default WeeklyCalendar;
