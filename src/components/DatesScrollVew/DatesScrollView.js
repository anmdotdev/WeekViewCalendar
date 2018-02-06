// @flow

import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, Dimensions } from 'react-native';

import HourlyScrollView from './HourlyScrollView/HourlyScrollView';

export default class DatesScrollView extends Component {
	render() {
		const datesData = [...this.props.datesData];
		const daysInWeek = this.props.screenOrientation === 'portrait' ? 5 : 7;

		let flatListData = [];

		for (i = 0; i < datesData.length / daysInWeek; i++) {
			const data = [];

			for (j = 0; j < daysInWeek; j++) {
				data[j] = datesData[i * daysInWeek + j];
			}

			flatListData[i] = {
				key: 'id_' + i,
				data: data
			};
		}

		return (
			<FlatList
				style={styles.container}
				pagingEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				data={flatListData}
				removeClippedSubviews={false}
				onEndReachedThreshold={1}
				renderItem={({ item }) => {
					console.log(item.data);
					return (
						<HourlyScrollView
							datesData={item.data}
							hoursList={this.props.hoursList}
							barColor={this.props.barColor}
							dimensions={this.props.screenDimensions}
						/>
					);
				}}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
