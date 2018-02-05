/**
 * @flow
 *
 * Horizontal scroll view component containing 3 Vertical scroll views.
 * Paginated to contain 3 pages of dates
 *
 * Left - Middle - Right
 */

import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';

import HourlyScrollView from './HourlyScrollView/HourlyScrollView';

const ITEM_WIDTH = Dimensions.get('window').width;

export default class DatesScrollView extends Component {
	constructor(props) {
		super(props);
		this.isLoadingContent = true;
	}

	handleContentSizeChange = () => {
		if (this.isLoadingContent) {
			this.isLoadingContent = false;
			this.handleContentSizeChange = null;

			this.horizontalScrollView.scrollTo({
				x: ITEM_WIDTH,
				y: 0,
				animated: false
			});
		}
	};

	momentumScrollEnd = event => {
		console.log('[momentumScrollEnd]', event.nativeEvent.contentOffset);
		console.log('[itemWidth]', ITEM_WIDTH);
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

		return (
			<ScrollView
				ref={ref => (this.horizontalScrollView = ref)}
				style={styles.container}
				pagingEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				onContentSizeChange={this.handleContentSizeChange}
				onMomentumScrollBegin={this.momentumScrollBegin}
				onMomentumScrollEnd={this.momentumScrollEnd}>
				<HourlyScrollView
					datesData={previousDates}
					hoursList={this.props.hoursList}
					barColor={this.props.barColor}
				/>
				<HourlyScrollView
					datesData={currentDates}
					hoursList={this.props.hoursList}
					barColor={this.props.barColor}
				/>
				<HourlyScrollView
					datesData={nextDates}
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
