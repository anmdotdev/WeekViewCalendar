// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Touchable from '../../Shared/Touchable';

const todayButton = props => (
	<Touchable onPressHandler={props.onPressHandler} rippleBoundless>
		<View style={styles.todayButtonParent}>
			<View style={styles.todayButton}>
				<Text style={styles.todayText}>{props.todaysDate}</Text>
			</View>
		</View>
	</Touchable>
);

const styles = StyleSheet.create({
	todayButtonParent: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
		marginRight: 15,
		width: 30,
		height: 30
	},

	todayButton: {
		borderRadius: 5,
		borderColor: 'white',
		borderWidth: 1.5,
		alignItems: 'center',
		justifyContent: 'center',
		width: 26,
		height: 26
	},

	todayText: {
		color: 'white'
	}
});

export default todayButton;
