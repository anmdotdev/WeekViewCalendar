// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

const hourBlock = props => {
	const timePassedBlock = <View style={styles.timePassedBlock} />;

	return <View style={styles.container} />;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		borderColor: '#ddd',
		borderWidth: 0.4,
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	addButton: {
		flex: 1,
		backgroundColor: '#00B0FF',
		borderRadius: 5,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	timePassedBlock: {
		backgroundColor: '#eee',
		width: '100%',
		height: '80%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default hourBlock;
