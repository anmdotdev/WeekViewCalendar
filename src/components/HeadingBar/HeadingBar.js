// @flow

import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const headingBar = props => (
	<View style={styles.container}>
		<View style={styles.monthYearView}>
			<Text style={styles.textMonth}>Feb</Text>
			<View>
				<Text style={styles.textYear}>2018</Text>
				<Text style={styles.textYear2}>Week 5</Text>
			</View>
		</View>

		<View style={styles.rightIconsView}>
			<View style={styles.todayButton}>
				<Text style={styles.todayText}>4</Text>
			</View>

			<Icon
				style={styles.settingsButton}
				size={30}
				name="md-more"
				color="white"
			/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#00B0FF',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: Platform.OS == 'ios' ? 20 : 0,
		height: Platform.OS == 'ios' ? 70 : 55
	},
	monthYearView: {
		flexDirection: 'row',
		marginLeft: 20
	},
	textMonth: {
		color: 'white',
		fontSize: 24
	},
	textYear: {
		color: 'white',
		marginTop: 3,
		marginLeft: 8,
		fontSize: 10
	},
	textYear2: {
		color: 'white',
		marginLeft: 8,
		fontSize: 10
	},
	rightIconsView: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginRight: 10
	},
	settingsButton: {
		marginLeft: 18,
		marginRight: 20
	},
	todayButton: {
		marginRight: 12,
		backgroundColor: '#00B0FF',
		alignItems: 'center',
		justifyContent: 'center',
		width: 26,
		height: 26,
		borderRadius: 5,
		borderColor: 'white',
		borderWidth: 1.5
	},
	todayText: {
		color: 'white'
	}
});

export default headingBar;
