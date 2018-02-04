// @flow

import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
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
		<ScrollView style={styles.container}>
			<TimeRow hourValue="All" hourSuffixValue="Day" />
			{content}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default hourlyScrollView;
