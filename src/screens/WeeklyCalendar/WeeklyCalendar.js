// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import AppBar from '../../components/AppBar/AppBar';
import DatesHorizontalList from '../../components/DatesHorizontalList/DatesHorizontalList';

import { HOURS_LIST, APP_BAR_COLORS } from '../../utils/constants';

class WeeklyCalendar extends Component<{}> {
    constructor(props) {
        super(props);

        // Initialize State
        const screenOrientation =
            Dimensions.get('window').height > Dimensions.get('window').width
                ? 'portrait'
                : 'landscape';

        const screenDimensions = {
            x: Dimensions.get('window').width,
            y: Dimensions.get('window').height
        };

        const initialDataLength = 350;

        //Generate Dates Data
        const initialDate = new Date();
        const todaysIndex = initialDataLength / 2 + initialDate.getDay();

        const datesData = new Array(initialDataLength);
        initialDate.setDate(initialDate.getDate() - todaysIndex);

        for (i = 0; i < datesData.length; i++) {
            datesData[i] = {
                id: 'date_' + i,
                day: initialDate.getDay(),
                date: initialDate.getDate(),
                month: initialDate.getMonth(),
                year: initialDate.getFullYear(),
                isToday: todaysIndex === i
            };

            initialDate.setDate(initialDate.getDate() + 1);
        }

        // Set Paginated Data - 5 Days for Portrait
        const paginatedDataPortrait = [];

        for (i = 0; i < datesData.length / 5; i++) {
            const data = [];

            for (j = 0; j < 5; j++) {
                data[j] = datesData[i * 5 + j];
            }

            paginatedDataPortrait[i] = {
                key: 'id_' + i,
                pagesDatesData: data,
                weekMonth: data[0].month,
                weekYear: data[0].year
            };
        }

        // Set Paginated Data - 7 Days for Landscape
        const paginatedDataLandscape = [];

        for (i = 0; i < datesData.length / 7; i++) {
            const data = [];

            for (j = 0; j < 7; j++) {
                data[j] = datesData[i * 7 + j];
            }

            paginatedDataLandscape[i] = {
                key: 'id_' + i,
                pagesDatesData: data,
                weekMonth: data[0].month,
                weekYear: data[0].year
            };
        }

        //Set Todays Paginated Index
        const todaysPageIndexPortrait = Math.floor(todaysIndex / 5);
        const todaysPageIndexLandscape = Math.floor(todaysIndex / 7);

        // Add Dimension Change Listener
        Dimensions.addEventListener('change', this.onDimensionChangeListener);

        this.state = {
            screenOrientation,
            screenDimensions,
            todaysIndex,
            datesData,
            paginatedDataPortrait,
            paginatedDataLandscape,
            todaysPageIndexPortrait,
            todaysPageIndexLandscape,
            currentPageIndexPortrait: todaysPageIndexPortrait,
            currentPageIndexLandscape: todaysPageIndexLandscape,
        };
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.onDimensionChangeListener);
    }

    onDimensionChangeListener = () => {

        const screenOrientation =
            Dimensions.get('window').height > Dimensions.get('window').width
                ? 'portrait'
                : 'landscape';

        const screenDimensions = {
            x: Dimensions.get('window').width,
            y: Dimensions.get('window').height
        };

        this.setState({ screenOrientation, screenDimensions });
    };

    monthDetailPressHandler = () => {
        alert('You pressed the month detail');
    };

    todayButtonPressHandler = () => {
        alert('You pressed the today button');
    };

    moreButtonPressHandler = () => {
        alert('You pressed the more button');
    };

    onMomentumScrollEndHorizontalList = () => {

    }

    render() {

        const currentMonth =
            this.state.screenOrientation === 'portrait' ?
                this.state.paginatedDataPortrait[this.state.currentPageIndexPortrait].weekMonth :
                this.state.paginatedDataLandscape[this.state.currentPageIndexLandscape].weekMonth;

        const currentYear =
            this.state.screenOrientation === 'portrait' ?
                this.state.paginatedDataPortrait[this.state.currentPageIndexPortrait].weekYear :
                this.state.paginatedDataLandscape[this.state.currentPageIndexLandscape].weekYear;

        const paginatedData =
            this.state.screenOrientation === 'portrait' ?
                this.state.paginatedDataPortrait :
                this.state.paginatedDataLandscape;

        const currentPageIndex =
            this.state.screenOrientation === 'portrait' ?
                this.state.currentPageIndexPortrait :
                this.state.currentPageIndexLandscape;

        return (
            <View style={styles.container}>
                <AppBar
                    appBarColor={APP_BAR_COLORS[0]}
                    todaysDate={this.state.datesData[this.state.todaysIndex]}
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                    monthDetailPressHandler={this.monthDetailPressHandler}
                    todayButtonPressHandler={this.todayButtonPressHandler}
                    moreButtonPressHandler={this.moreButtonPressHandler}
                />
                <DatesHorizontalList
                    paginatedData={paginatedData}
                    hourRowsList={HOURS_LIST}
                    headerColor={APP_BAR_COLORS[0]}
                    screenDimensions={this.state.screenDimensions}
                    currentPageIndex={currentPageIndex}
                    onMomentumScrollEndHorizontalList={this.onMomentumScrollEndHorizontalList}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_BAR_COLORS[0]
    }
});

export default WeeklyCalendar;
