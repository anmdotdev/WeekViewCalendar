import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';

import DateHeaderRow from './DateHeaderRow/DateHeaderRow';
import HourRow from './HourRow/HourRow';

export default class HoursVerticalList extends PureComponent {
	onViewLayout = event => {
		this.viewHeight = event.nativeEvent.layout.height;
		this.onContentSizeChange();
	};

	onContentSizeChange = () => {
		const heightValue =
			(this.props.currentTime.hours - 1) * 80 - this.viewHeight < 0
				? (this.props.currentTime.hours - 1) * 80
				: (this.props.currentTime.hours - 1) * 80 - this.viewHeight;

		this.scrollToHeight(heightValue);
	};

	scrollToHeight = height => {
		this._hourVerticalScrollView.scrollTo({
			x: 0,
			y: height,
			animated: false
		});
	};

	render() {
		const hoursList = this.props.hourRowsList.map((value, id) => (
			<HourRow
				key={id}
				ID={id}
				hourValue={value}
				hourSuffix={id < 12 ? 'AM' : 'PM'}
				dates={this.props.pagesDatesData}
				currentTime={this.props.currentTime}
				headerColor={this.props.headerColor}
			/>
		));

		const hoursVerticalList = (
			<View style={{ flex: 1, minWidth: this.props.screenDimensions.x }}>
				<DateHeaderRow
					dates={this.props.pagesDatesData}
					headerColor={this.props.headerColor}
					screenOrientation={this.props.screenOrientation}
				/>
				<View style={{ flex: 1 }} onLayout={this.onViewLayout}>
					<ScrollView
						ref={component =>
							(this._hourVerticalScrollView = component)
						}
						style={{ flex: 1 }}
						showsVerticalScrollIndicator={false}
						bounces={false}
						onContentSizeChange={this.onContentSizeChange}>
						{hoursList}
					</ScrollView>
				</View>
			</View>
		);

		const emptyComponent = (
			<View
				style={{
					flex: 1,
					minWidth: this.props.screenDimensions.x,
					backgroundColor: 'white'
				}}
			/>
		);

		const componentContent = this.props.isEmpty
			? emptyComponent
			: hoursVerticalList;
		return componentContent;
	}
}
