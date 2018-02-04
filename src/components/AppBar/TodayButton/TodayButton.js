// @flow

import React from 'react';
import {
	TouchableNativeFeedback,
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	Platform
} from 'react-native';

const todayButton = props => {
	const content = (
		<View style={styles.todayButton}>
			<Text style={styles.todayText}>{props.todaysDate}</Text>
		</View>
	);

	if (Platform.OS === 'android') {
		return (
			<TouchableNativeFeedback
				onPress={props.onPressHandler}
				background={TouchableNativeFeedback.Ripple('white', true)}>
				<View style={styles.todayButtonParent}>{content}</View>
			</TouchableNativeFeedback>
		);
	} else {
		return (
			<TouchableOpacity onPress={props.onPressHandler}>
				{content}
			</TouchableOpacity>
		);
	}
};

const styles = StyleSheet.create({
	todayButtonParent: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
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
