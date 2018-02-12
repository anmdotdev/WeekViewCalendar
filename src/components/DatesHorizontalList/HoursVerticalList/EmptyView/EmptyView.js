import React, { PureComponent } from 'react';
import { View } from 'react-native';

export default class EmptyView extends PureComponent {
	render() {
		return (
			<View
				style={{
					flex: 1,
					minWidth: this.props.minWidth,
					backgroundColor: 'white'
				}}
			/>
		);
	}
}
