// @flow

import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Dimensions } from 'react-native';

import HourlyScrollView from './HourlyScrollView/HourlyScrollView';

export default class DatesScrollView extends Component {
	render() {
		return (
			<ScrollView
				style={styles.container}
				pagingEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}>
				{this.props.datesData.map(page => (
					<HourlyScrollView
						key={page.key}
						datesData={page.datesData}
						hoursList={this.props.hoursList}
						barColor={this.props.barColor}
						dimensions={this.props.screenDimensions}
					/>
				))}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
