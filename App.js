// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import WeeklyCalendar from './src/screens/WeeklyCalendar/WeeklyCalendar';

export default class App extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<WeeklyCalendar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff'
	}
});
