// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const monthlyDetail = props => (
	<View
		style={
			props.screenOrientation === 'portrait'
				? styles.portraitContainer
				: styles.landscapeContainer
		}>
		<Text
			style={
				props.screenOrientation === 'portrait'
					? styles.portraitText
					: styles.landscapeText
			}>
			{props.month + ' ' + props.year}
		</Text>
	</View>
);

const styles = StyleSheet.create({
	portraitContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 15,
		padding: 5
	},
	portraitText: {
		color: 'white',
		fontSize: 18
	},
	landscapeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 15,
		padding: 5
	},
	landscapeText: {
		color: 'white',
		fontSize: 13
	}
});

export default monthlyDetail;
