import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HoursVerticalList from './HoursVerticalList/HoursVerticalList';

export default class DatesHorizontalList extends Component {
	componentDidUpdate() {
		this.scrollToCurrent();
	}

	scrollToCurrent = () => {
		this._datesHorizontalScrollView.scrollTo({
			x: this.props.screenDimensions.x * this.props.currentPageIndex,
			y: 0,
			animated: false
		});
	};

	render() {
		const pageList = this.props.paginatedData.map((page, id) => {
			return (
				<HoursVerticalList
					key={page.key}
					pagesDatesData={page.pagesDatesData}
					hourRowsList={this.props.hourRowsList}
					headerColor={this.props.headerColor}
					screenDimensions={this.props.screenDimensions}
					screenOrientation={this.props.screenOrientation}
					currentTime={this.props.currentTime}
					isEmpty={Math.abs(this.props.currentPageIndex - id) > 3}
				/>
			);
		});

		return (
			<ScrollView
				ref={component => (this._datesHorizontalScrollView = component)}
				style={{ flex: 1 }}
				pagingEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				onContentSizeChange={this.scrollToCurrent}
				scrollEventThrottle={10}
				onScroll={this.props.onHorizontalScroll}>
				{pageList}
			</ScrollView>
		);
	}
}
