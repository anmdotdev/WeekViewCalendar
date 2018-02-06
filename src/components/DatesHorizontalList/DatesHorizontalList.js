// @flow

import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HoursVerticalList from './HoursVerticalList/HoursVerticalList';

export default class DatesHorizontalList extends Component {

    scrollToCurrent = () => {
        this._datesHorizontalScrollView.scrollTo({
            x: this.props.screenDimensions.x * this.props.currentPageIndex,
            y: 0,
            animated: false
        });
    }

    render() {
        const pageList = this.props.paginatedData.map((page, id) => (
            <HoursVerticalList
                key={page.key}
                pagesDatesData={page.pagesDatesData}
                hourRowsList={this.props.hourRowsList}
                headerColor={this.props.headerColor}
                screenDimensions={this.props.screenDimensions}
                isEmpty={Math.abs(this.props.currentPageIndex - id) > 2}
            />
        ));

        return (
            <ScrollView
                ref={component => this._datesHorizontalScrollView = component}
                style={{ flex: 1 }}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onContentSizeChange={this.scrollToCurrent}
                onMomentumScrollEnd={this.props.onMomentumScrollEndHorizontalList}>
                {pageList}
            </ScrollView>
        );
    }
}