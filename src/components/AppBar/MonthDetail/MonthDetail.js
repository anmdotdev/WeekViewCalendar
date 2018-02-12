import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const monthlyDetail = props => (
	<View style={styles.container}>
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
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 15,
		padding: 5
	},
	portraitText: {
		color: 'white',
		fontSize: 18
	},
	landscapeText: {
		color: 'white',
		fontSize: 13
	}
});

export default monthlyDetail;
