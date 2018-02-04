// @flow

import React from 'react';
import {
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform
} from 'react-native';

const touchable = props => {
	if (Platform.OS === 'android') {
		return (
			<TouchableNativeFeedback
				{...props}
				onPress={props.onPressHandler}
				background={TouchableNativeFeedback.Ripple(
					props.rippleColor ? props.rippleColor : 'white',
					props.rippleBoundless
				)}>
				{props.children}
			</TouchableNativeFeedback>
		);
	} else {
		return (
			<TouchableOpacity {...props} onPress={props.onPressHandler}>
				{props.children}
			</TouchableOpacity>
		);
	}
};

export default touchable;
