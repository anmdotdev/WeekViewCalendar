import React, { PureComponent } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import DateHeaderRow from './DateHeaderRow/DateHeaderRow';
import HourRow from './HourRow/HourRow';
import EmptyView from './EmptyView/EmptyView';

export default class HoursVerticalList extends PureComponent {
	// Set initial view height
	onViewLayout = event => {
		this.viewHeight = event.nativeEvent.layout.height;
		this.onContentSizeChange();
	};

	// Scroll Vertical List to Current Hour and Time
	onContentSizeChange = () => {
		const maxHeight = this.props.hourRowsList.length * 80 - this.viewHeight;
		let heightValue =
			(this.props.currentTime.hours - 1) * 80 - this.viewHeight;

		heightValue =
			heightValue < maxHeight
				? heightValue + this.viewHeight
				: heightValue;

		heightValue = heightValue > maxHeight ? maxHeight : heightValue;

		this.scrollToHeight(heightValue);
	};

	// Scroll Vertical List to Current Hour and Time
	scrollToHeight = heightValue => {
		this._hourScrollView.scrollTo({
			x: 0,
			y: heightValue,
			animated: false
		});
	};

	render() {
		const hoursList = this.props.hourRowsList.map((value, id) => (
			<HourRow
				key={id}
				rowID={id}
				headerColor={this.props.headerColor}
				currentTime={this.props.currentTime}
				hourValue={value}
				hourSuffix={id < 12 ? 'AM' : 'PM'}
				myDatesData={this.props.myDatesData}
				myEventsData={this.props.myEventsData}
			/>
		));

		const viewDimensionStyles = [
			styles.container,
			{ minWidth: this.props.screenDimensions.x }
		];

		const hoursVerticalScrollView = (
			<View style={viewDimensionStyles}>
				<DateHeaderRow
					headerColor={this.props.headerColor}
					todaysIndex={this.props.todaysIndex}
					myDatesData={this.props.myDatesData}
					myEventsData={this.props.myEventsData}
				/>
				<View style={styles.container} onLayout={this.onViewLayout}>
					<ScrollView
						ref={component => (this._hourScrollView = component)}
						style={styles.container}
						bounces={false}
						showsVerticalScrollIndicator={false}
						onContentSizeChange={this.onContentSizeChange}>
						{hoursList}
					</ScrollView>
				</View>
			</View>
		);

		const componentContent = this.props.isEmpty ? (
			<EmptyView minWidth={this.props.screenDimensions.x} />
		) : (
			hoursVerticalScrollView
		);

		return componentContent;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
