// @flow

import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import SingleDateHeading from './SingleDateHeading/SingleDateHeading';

const dateHeadingFlatList = props => (
	<View style={styles.container}>
		<FlatList
			data={props.listData}
			renderItem={({ item }) => (
				<SingleDateHeading date={item.date} day={item.day} />
			)}
			horizontal
			showsHorizontalScrollIndicator={false}
		/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#00B0FF',
		alignItems: 'center',
		height: 60
	}
});

export default dateHeadingFlatList;
