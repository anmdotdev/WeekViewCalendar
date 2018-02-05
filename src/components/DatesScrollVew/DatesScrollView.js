/**
 * @flow
 *
 * Horizontal scroll view component containing 3 Vertical scroll views.
 * Paginated to contain 3 pages of dates
 *
 * Left - Middle - Right
 */

import React, { Component } from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';

import HourlyScrollView from './HourlyScrollView/HourlyScrollView';

const ITEM_WIDTH = Dimensions.get('window').width;

export default class DatesScrollView extends Component {
	scrollToItem = index => {
		this.refs._horizontalFlatList.scrollToIndex({
			animated: false,
			index: '' + index
		});
	};

	viewableChanged = info => {
		console.log('Info', info);
	};

	render() {
		let previousDates = null;
		let currentDates = null;
		let nextDates = null;

		if (this.props.screenOrientation === 'portrait') {
			previousDates = this.props.datesAroundToday.slice(
				this.props.currentDateIndex - 5,
				this.props.currentDateIndex
			);
			currentDates = this.props.datesAroundToday.slice(
				this.props.currentDateIndex,
				this.props.currentDateIndex + 5
			);
			nextDates = this.props.datesAroundToday.slice(
				this.props.currentDateIndex + 5,
				this.props.currentDateIndex + 10
			);
		} else if (this.props.screenOrientation === 'landscape') {
			previousDates = this.props.datesAroundToday.slice(0, 7);
			currentDates = this.props.datesAroundToday.slice(7, 14);
			nextDates = this.props.datesAroundToday.slice(14, 21);
		}

		const combinedArray = [
			{ key: 1, datesData: previousDates },
			{ key: 2, datesData: currentDates },
			{ key: 3, datesData: nextDates }
		];

		return (
			<FlatList
				ref="_horizontalFlatList"
				style={styles.container}
				keyExtractor={item => item.key}
				pagingEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				getItemLayout={(data, index) => ({
					length: ITEM_WIDTH,
					offset: ITEM_WIDTH * index,
					index
				})}
				initialNumToRender={3}
				initialScrollIndex={1}
				onViewableItemsChanged={this.viewableChanged}
				data={combinedArray}
				renderItem={({ item }) => (
					<HourlyScrollView
						datesData={item.datesData}
						hoursList={this.props.hoursList}
						barColor={this.props.barColor}
					/>
				)}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
