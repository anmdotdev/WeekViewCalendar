// @flow

import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import HourlyScrollView from './HourlyScrollView/HourlyScrollView';

export default class DatesScrollView extends Component {
	render() {
		return (
			<ScrollView
				style={styles.container}
				pagingEnabled
				horizontal
				showsHorizontalScrollIndicator={false}>
				<HourlyScrollView
					hoursList={this.props.hoursList}
					barColor={this.props.barColor}
				/>
				<HourlyScrollView
					hoursList={this.props.hoursList}
					barColor={this.props.barColor}
				/>
				<HourlyScrollView
					hoursList={this.props.hoursList}
					barColor={this.props.barColor}
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
