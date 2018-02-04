// @flow

import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import SingleDateHeading from '../DateHeadingFlatList/SingleDateHeading/SingleDateHeading';

const timingFlatList = props => (
	<View style={styles.container}>
		<FlatList
			data={props.listData}
			renderItem={({ item }) => (
				<View style={styles.innerView}>
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
					<SingleDateHeading date={item.date} day={item.day} />
				</View>
			)}
			horizontal
			showsHorizontalScrollIndicator={false}
		/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#eee'
	},
	innerView: {
		flex: 1
	}
});

export default timingFlatList;
