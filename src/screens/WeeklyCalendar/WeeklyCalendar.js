// @flow

import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

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

		const currentTime = {
			hours: initialDate.getHours(),
			minutes: initialDate.getMinutes()
		};

		const datesData = new Array(initialDataLength);
		initialDate.setDate(initialDate.getDate() - todaysIndex);

		for (i = 0; i < datesData.length; i++) {
			datesData[i] = {
				id: 'date_' + i,
				day: initialDate.getDay(),
				date: initialDate.getDate(),
				month: initialDate.getMonth(),
				year: initialDate.getFullYear(),
				isToday: todaysIndex === i,
				events: []
			};

			initialDate.setDate(initialDate.getDate() + 1);
		}

		// Generate Paginated Data
		const paginatedData = this.generatePaginatedData(
			datesData,
			datesData[todaysIndex].day - 1
		);

		// Set Todays Paginated Index
		const todaysPageIndex = {
			portrait: Math.floor(todaysIndex / 5),
			landscape: Math.floor(todaysIndex / 7)
		};

		const currentPageIndex = {
			portrait: Math.floor(todaysIndex / 5),
			landscape: Math.floor(todaysIndex / 7)
		};

		// Add Dimension Change Listener
		Dimensions.addEventListener('change', this.onDimensionChangeListener);

		this.state = {
			screenOrientation,
			screenDimensions,
			todaysIndex,
			datesData,
			paginatedData,
			todaysPageIndex,
			currentPageIndex,
			currentTime
		};
	}

	componentWillMount() {
		this.loadEventsData();
	}

	componentWillUnmount() {
		Dimensions.removeEventListener(
			'change',
			this.onDimensionChangeListener
		);
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

	generatePaginatedData = (datesData, portraitStartIndex) => {
		// Set Paginated Data - 5 Days for Portrait
		const paginatedDataPortrait = [];

		for (i = 0; i < datesData.length / 5; i++) {
			const data = [];

			for (j = 0; j < 5; j++) {
				data[j] = datesData[i * 5 + j + portraitStartIndex];
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

		return {
			portrait: paginatedDataPortrait,
			landscape: paginatedDataLandscape
		};
	};

	loadEventsData = () => {
		const eventsData = [
			{
				id: '1',
				eventName: 'Dev Conference 2018',
				eventDescription: 'The annual developer conference in 2018.',
				eventStartDateTime: new Date(2018, 2, 9, 8, 30, 0),
				eventStartDateTime: new Date(2018, 2, 9, 12, 30, 0)
			},
			{
				id: '2',
				eventName: 'Feedback Meeting',
				eventDescription: 'Weekly feedback meeting',
				eventStartDateTime: new Date(2018, 2, 9, 18, 30, 0),
				eventStartDateTime: new Date(2018, 2, 9, 19, 30, 0)
			}
		];

		const datesData = [...this.state.datesData];

		eventsData.map(event => {
			const eventDate =
				datesData[
					this.indexOfDateinDatesData(event.eventStartDateTime)
				];
			eventDate.events.push(event);
		});

		const paginatedData = this.generatePaginatedData(
			datesData,
			datesData[this.state.todaysIndex].day - 1
		);

		this.setState({ datesData, paginatedData });
	};

	indexOfDateinDatesData = date => {
		const datesData = this.state.datesData;

		for (i = 0; i < datesData.length; i++) {
			if (
				datesData[i].date === date.date &&
				datesData[i].month === date.month - 1 &&
				datesData[i].year === date.year
			) {
				return i;
			}
		}

		return -1;
	};

	monthDetailPressHandler = () => {
		alert('You pressed the month detail');
	};

	todayButtonPressHandler = () => {
		const currentPageIndex = {
			portrait: this.state.todaysPageIndex.portrait,
			landscape: this.state.todaysPageIndex.landscape
		};

		this.setState({ currentPageIndex });
	};

	moreButtonPressHandler = () => {
		alert('You pressed the Settings button. Nothing more to show here.');
	};

	onHorizontalScroll = event => {
		/*
		const currentPageIndexValue = Math.floor(
			event.nativeEvent.contentOffset.x / this.state.screenDimensions.x
		);

		if (
			this.state.screenOrientation === 'portrait' &&
			currentPageIndexValue != this.state.currentPageIndex.portrait
		) {
			const currentPageIndex = {
				portrait: currentPageIndexValue,
				landscape: this.state.currentPageIndex.landscape
			};

			this.setState({ currentPageIndex });
		} else if (
			this.state.screenOrientation === 'landscape' &&
			currentPageIndexValue != this.state.currentPageIndex.landscape
		) {
			const currentPageIndex = {
				portrait: this.state.currentPageIndex.portrait,
				landscape: currentPageIndexValue
			};

			this.setState({ currentPageIndex });
        }
        */
	};

	render() {
		const currentMonth =
			this.state.screenOrientation === 'portrait'
				? this.state.paginatedData.portrait[
						this.state.currentPageIndex.portrait
					].weekMonth
				: this.state.paginatedData.landscape[
						this.state.currentPageIndex.landscape
					].weekMonth;

		const currentYear =
			this.state.screenOrientation === 'portrait'
				? this.state.paginatedData.portrait[
						this.state.currentPageIndex.portrait
					].weekYear
				: this.state.paginatedData.landscape[
						this.state.currentPageIndex.landscape
					].weekYear;

		const todaysMonth = this.state.datesData[this.state.todaysIndex].month;

		const currentColorIndex =
			currentMonth - todaysMonth < 0
				? APP_BAR_COLORS.length + (currentMonth - todaysMonth)
				: currentMonth - todaysMonth;

		const paginatedData =
			this.state.screenOrientation === 'portrait'
				? this.state.paginatedData.portrait
				: this.state.paginatedData.landscape;

		const currentPageIndex =
			this.state.screenOrientation === 'portrait'
				? this.state.currentPageIndex.portrait
				: this.state.currentPageIndex.landscape;

		return (
			<View style={{ flex: 1 }}>
				<AppBar
					appBarColor={APP_BAR_COLORS[currentColorIndex]}
					todaysDate={this.state.datesData[this.state.todaysIndex]}
					currentMonth={currentMonth}
					currentYear={currentYear}
					screenOrientation={this.state.screenOrientation}
					todayButtonPressHandler={this.todayButtonPressHandler}
				/>
				<DatesHorizontalList
					paginatedData={paginatedData}
					hourRowsList={HOURS_LIST}
					headerColor={APP_BAR_COLORS[currentColorIndex]}
					screenDimensions={this.state.screenDimensions}
					screenOrientation={this.state.screenOrientation}
					currentPageIndex={currentPageIndex}
					onHorizontalScroll={this.onHorizontalScroll}
					currentTime={this.state.currentTime}
				/>
			</View>
		);
	}
}

export default WeeklyCalendar;
