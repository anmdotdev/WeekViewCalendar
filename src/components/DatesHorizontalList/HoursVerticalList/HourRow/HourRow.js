import React from 'react';
import { View, StyleSheet } from 'react-native';

import HourHeaderBlock from './HourHeaderBlock/HourHeaderBlock';
import HourBlock from './HourBlock/HourBlock';

const hourRow = props => {
	return (
		<View style={styles.container}>
			<HourHeaderBlock
				hourValue={props.hourValue}
				hourSuffix={props.hourSuffix}
				rowID={props.ID}
				date={props.dates[0]}
			/>
			{props.dates.map(dateValue => (
				<HourBlock
					key={dateValue.id}
					rowID={props.ID}
					date={dateValue}
					currentTime={props.currentTime}
					headerColor={props.headerColor}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		alignItems: 'center',
		height: 80,
		paddingRight: 15
	}
});

export default hourRow;
