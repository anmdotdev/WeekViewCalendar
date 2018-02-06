/**
 * @flow
 *
 * Vertical scroll view component containing the Date Heading
 * and the hour List of a Particular Page dates.
 *
 * 12 am - 1 am & so on...
 */

import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';

import DateHeaderRow from './DateHeaderRow/DateHeaderRow';
import HourRow from './HourRow/HourRow';

export default class HourlyScrollView extends PureComponent {
	render() {
		const hoursList = this.props.hoursList.map((value, id) => (
			<HourRow
				key={id}
				hourValue={value}
				hourSuffix={id < 12 ? 'AM' : 'PM'}
				datesData={this.props.datesData}
			/>
		));

		return (
			<ScrollView
				style={[
					styles.container,
					{ minWidth: this.props.dimensions.x }
				]}
				stickyHeaderIndices={[0]}
				showsVerticalScrollIndicator={false}
				bounces={false}>
				<DateHeaderRow
					datesData={this.props.datesData}
					barColor={this.props.barColor}
				/>
				<HourRow
					hourValue="All"
					hourSuffix="Day"
					datesData={this.props.datesData}
				/>
				{hoursList}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
