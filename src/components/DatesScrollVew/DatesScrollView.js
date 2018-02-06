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

export default class DatesScrollView extends Component {
	constructor(props) {
		super(props);
		this.isLoadingContent = true;
	}

	componentDidUpdate() {
		this.scrollToCenter();
	}

	handleContentSizeChange = () => {
		this.scrollToCenter();
	};

	scrollToCenter = () => {
		this.horizontalScrollView.scrollTo({
			x: this.props.screenDimensions.x,
			y: 0,
			animated: false
		});
	};

	momentumScrollEnd = event => {
		if (
			Math.abs(
				event.nativeEvent.contentOffset.x -
					this.props.screenDimensions.x * 2
			) < 10
		) {
			console.log('right', this.props.handleScrollToForData);
			this.props.handleScrollToForData('right');
		} else if (Math.abs(event.nativeEvent.contentOffset.x) < 10) {
			console.log('left', this.props.handleScrollToForData);
			this.props.handleScrollToForData('left');
		}
	};

	render() {
		const daysInWeek = this.props.screenOrientation === 'portrait' ? 5 : 7;

		let previousDates = this.props.currentlyVisibleDates.slice(
			0,
			daysInWeek
		);
		let currentDates = this.props.currentlyVisibleDates.slice(
			daysInWeek,
			daysInWeek * 2
		);
		let nextDates = this.props.currentlyVisibleDates.slice(
			daysInWeek * 2,
			daysInWeek * 3
		);

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
					dimensions={this.props.screenDimensions}
				/>
				<HourlyScrollView
					datesData={currentDates}
					hoursList={this.props.hoursList}
					barColor={this.props.barColor}
					dimensions={this.props.screenDimensions}
				/>
				<HourlyScrollView
					datesData={nextDates}
					hoursList={this.props.hoursList}
					barColor={this.props.barColor}
					dimensions={this.props.screenDimensions}
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
