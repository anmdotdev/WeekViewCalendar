// @flow

import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

const headingBar = props => (
	<View style={styles.container}>
		<Text style={styles.textMonth}>Feb</Text>
		<View>
			<Text style={styles.textYear}>2018</Text>
			<Text style={styles.textYear}>Week 5</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#00B0FF',
		alignItems: 'center',
		paddingTop: Platform.OS == 'ios' ? 20 : 0,
		height: Platform.OS == 'ios' ? 70 : 55
	},
	textMonth: {
		color: 'white',
		marginLeft: 20,
		fontSize: 24
	},
	textYear: {
		color: 'white',
		marginLeft: 10,
		fontSize: 10
	}
});

export default headingBar;
