import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import HoursVerticalList from './HoursVerticalList/HoursVerticalList';

export default class DatesHorizontalList extends PureComponent {
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
		const horizontalScrollViewContent = this.props.pageData.map(
			(page, id) => {
				const myDatesData = [];
				const myEventsData = [];

				page.map(dateIndex => {
					myDatesData.push(this.props.datesData[dateIndex]);
				});

				this.props.eventsData.map(event => {
					if (
						page.includes(event.startDateIndexInDatesData) ||
						page.includes(event.endDateIndexInDatesData)
					) {
						myEventsData.push(event);
					}
				});

				return (
					<HoursVerticalList
						key={id}
						screenDimensions={this.props.screenDimensions}
						hourRowsList={this.props.hourRowsList}
						headerColor={this.props.headerColor}
						currentTime={this.props.currentTime}
						todaysIndex={this.props.todaysIndex}
						isEmpty={Math.abs(this.props.currentPageIndex - id) > 2}
						myDatesData={myDatesData}
						myEventsData={myEventsData}
					/>
				);
			}
		);

		return (
			<ScrollView
				ref={component => (this._datesHorizontalScrollView = component)}
				style={{ flex: 1 }}
				scrollEventThrottle={16}
				pagingEnabled
				horizontal
				bounces={false}
				showsHorizontalScrollIndicator={false}
				onContentSizeChange={this.scrollToCurrent}
				onScroll={this.props.onHorizontalScroll}>
				{horizontalScrollViewContent}
			</ScrollView>
		);
	}
}
