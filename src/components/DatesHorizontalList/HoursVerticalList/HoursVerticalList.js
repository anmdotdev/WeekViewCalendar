// @flow

import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import DateHeaderRow from './DateHeaderRow/DateHeaderRow';
import HourRow from './HourRow/HourRow';

export default class HoursVerticalList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isEmpty != this.props.isEmpty
    }

    render() {

        const hoursList = this.props.hourRowsList.map((value, id) => (
            <HourRow
                key={id}
                hourValue={value}
                hourSuffix={id < 12 ? 'AM' : 'PM'}
                dates={this.props.pagesDatesData}
            />
        ))

        const hoursVerticalList = (
            <ScrollView
                style={{ flex: 1, minWidth: this.props.screenDimensions.x }}
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}
                bounces={false}>
                <DateHeaderRow
                    dates={this.props.pagesDatesData}
                    headerColor={this.props.headerColor}
                />
                <HourRow
                    hourValue="All"
                    hourSuffix="Day"
                    dates={this.props.pagesDatesData}
                />
                {hoursList}
            </ScrollView>
        );

        const emptyComponent = <View style={{ flex: 1, minWidth: this.props.screenDimensions.x, backgroundColor: 'white' }} />

        const componentContent = this.props.isEmpty ? emptyComponent : hoursVerticalList;
        return (componentContent);
    }
}
