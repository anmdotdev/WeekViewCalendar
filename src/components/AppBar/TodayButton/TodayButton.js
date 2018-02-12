import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Touchable from '../../Shared/Touchable';

const todayButton = props => {
	const todayButtonStyles = [
		styles.todayButton,
		props.screenOrientation === 'landscape'
			? {
					width: 20,
					height: 20
				}
			: null
	];

	const todayTextStyles = [
		styles.todayText,
		props.screenOrientation === 'landscape' ? { fontSize: 10 } : null
	];

	return (
		<Touchable onPressHandler={props.onPressHandler} rippleBoundless>
			<View style={styles.touchableArea}>
				<View style={todayButtonStyles}>
					<Text style={todayTextStyles}>{props.todaysDate}</Text>
				</View>
			</View>
		</Touchable>
	);
};

const styles = StyleSheet.create({
	touchableArea: {
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
