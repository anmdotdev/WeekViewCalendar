// @flow

import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';

import DateHeadings from './DateHeadings/DateHeadings';
import TimeRow from './TimeRow/TimeRow';

const hourlyScrollView = props => {
	const content = props.hoursList.map((value, id) => (
		<TimeRow
			key={id}
			hourValue={value}
			hourSuffixValue={id < 12 ? 'AM' : 'PM'}
		/>
	));

	return (
		<ScrollView style={styles.container} stickyHeaderIndices={[0]}>
			<DateHeadings barColor={props.barColor} />
			<TimeRow hourValue="All" hourSuffixValue="Day" />
			{content}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minWidth: Dimensions.get('window').width
	}
});

export default hourlyScrollView;
