// @flow

import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import HourHeaderBlock from './HourHeaderBlock/HourHeaderBlock';
import HourBlock from './HourBlock/HourBlock';

export default class HourRow extends PureComponent<{}> {
	render() {
		return (
			<View style={styles.container}>
				<HourHeaderBlock
					hourValue={this.props.hourValue}
					hourSuffix={this.props.hourSuffix}
				/>
				{this.props.datesData.map(dateValue => (
					<HourBlock key={dateValue.id} date={dateValue.date} />
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		alignItems: 'center',
		height: 80,
		paddingRight: 14
	}
});
