// @flow

import React from 'react';
import {
	TouchableNativeFeedback,
	TouchableOpacity,
	View,
	StyleSheet,
	Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const moreButton = props => {
	const content = <Icon size={30} name="md-more" color="white" />;

	if (Platform.OS === 'android') {
		return (
			<TouchableNativeFeedback
				onPress={props.onPressHandler}
				background={TouchableNativeFeedback.Ripple('white', true)}>
				<View style={styles.settingsButton}>{content}</View>
			</TouchableNativeFeedback>
		);
	} else {
		return (
			<TouchableOpacity
				style={styles.settingsButton}
				onPress={props.onPressHandler}>
				{content}
			</TouchableOpacity>
		);
	}
};

const styles = StyleSheet.create({
	settingsButton: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 5,
		marginLeft: 5,
		width: 30,
		height: 30
	}
});

export default moreButton;
