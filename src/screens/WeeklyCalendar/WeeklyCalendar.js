import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import AppBar from '../../components/AppBar/AppBar';
import DatesHorizontalList from '../../components/DatesHorizontalList/DatesHorizontalList';

import { HOURS_LIST, APP_BAR_COLORS } from '../../utils/constants';

class WeeklyCalendar extends Component {
	constructor(props) {
		super(props);

		const screenOrientation =
			Dimensions.get('window').height > Dimensions.get('window').width
				? 'portrait'
				: 'landscape';

		const screenDimensions = {
			x: Dimensions.get('window').width,
			y: Dimensions.get('window').height
		};

		const initialDataLength = 700;

		const initialDate = new Date();
		const todaysIndex = initialDataLength / 2 + initialDate.getDay();

		const currentTime = {
			hours: initialDate.getHours(),
			minutes: initialDate.getMinutes()
		};

		const datesData = new Array(initialDataLength);
		initialDate.setDate(initialDate.getDate() - todaysIndex);

		const portraitOffStart = initialDate.getDay() - 1;

		for (i = 0; i < datesData.length; i++) {
			datesData[i] = {
				id: 'date_' + i,
				day: initialDate.getDay(),
				date: initialDate.getDate(),
				month: initialDate.getMonth(),
				year: initialDate.getFullYear()
			};

			initialDate.setDate(initialDate.getDate() + 1);
		}

		const pagesPortrait = [];
		for (i = 0; i < datesData.length / 5; i++) {
			const data = [];

			for (j = 0; j < 5; j++) {
				data[j] = i * 5 + j + portraitOffStart;
			}

			pagesPortrait[i] = data;
		}

		const pagesLandscape = [];
		for (i = 0; i < datesData.length / 7; i++) {
			const data = [];

			for (j = 0; j < 7; j++) {
				data[j] = i * 7 + j;
			}

			pagesLandscape[i] = data;
		}

		const todaysPageIndex = {
			portrait: Math.floor(todaysIndex / 5),
			landscape: Math.floor(todaysIndex / 7)
		};

		const currentPageIndex = {
			portrait: Math.floor(todaysIndex / 5),
			landscape: Math.floor(todaysIndex / 7)
		};

		Dimensions.addEventListener('change', this.onDimensionChangeListener);

		this.state = {
			screenOrientation,
			screenDimensions,
			datesData,
			todaysIndex,
			currentTime,
			pagesPortrait,
			pagesLandscape,
			todaysPageIndex,
			currentPageIndex,
			eventsData: null
		};
	}

	componentWillUnmount() {
		Dimensions.removeEventListener(
			'change',
			this.onDimensionChangeListener
		);
	}

	componentDidMount() {
		if (!this.state.eventsData) {
			fetch('https://week-view-calendar.firebaseio.com/eventsData.json')
				.then(response => response.json())
				.then(responseJson => {
					this.loadEventsData(responseJson);
				})
				.catch(error => {
					console.error(error);
				});
		}
	}

	loadEventsData = loadedEventData => {
		const eventsData = [];

		loadedEventData.map(event => {
			const eventData = {
				id: event.id,
				eventName: event.eventName,
				startDateIndexInDatesData: 0,
				endDateIndexInDatesData: 0,
				eventStartDateTime: new Date(
					event.eventStartDateTime.year,
					event.eventStartDateTime.month,
					event.eventStartDateTime.date,
					event.eventStartDateTime.hours,
					event.eventStartDateTime.minutes,
					event.eventStartDateTime.seconds
				),
				eventEndDateTime: new Date(
					event.eventEndDateTime.year,
					event.eventEndDateTime.month,
					event.eventEndDateTime.date,
					event.eventEndDateTime.hours,
					event.eventEndDateTime.minutes,
					event.eventEndDateTime.seconds
				)
			};

			eventData.startDateIndexInDatesData = this.findIndexOfDateInDatesData(
				eventData.eventStartDateTime.getFullYear(),
				eventData.eventStartDateTime.getMonth(),
				eventData.eventStartDateTime.getDate()
			);

			eventData.endDateIndexInDatesData = this.findIndexOfDateInDatesData(
				eventData.eventEndDateTime.getFullYear(),
				eventData.eventEndDateTime.getMonth(),
				eventData.eventEndDateTime.getDate()
			);

			eventsData.push(eventData);
		});

		this.setState({ eventsData });
	};

	findIndexOfDateInDatesData = (year, month, date) => {
		const datesData = this.state.datesData;

		for (i = 0; i < datesData.length; i++) {
			if (
				datesData[i].date === date &&
				datesData[i].month === month &&
				datesData[i].year === year
			) {
				return i;
			}
		}

		return -1;
	};

	onDimensionChangeListener = () => {
		const screenOrientation =
			Dimensions.get('window').height > Dimensions.get('window').width
				? 'portrait'
				: 'landscape';

		const screenDimensions = {
			x: Dimensions.get('window').width,
			y: Dimensions.get('window').height
		};

		const currentPageIndex = {
			portrait: this.state.currentPageIndex.portrait,
			landscape: this.state.currentPageIndex.landscape
		};

		if (screenOrientation === 'landscape') {
			//Calculate from portrait
			const currentStartDateIndex = this.state.pagesPortrait[
				this.state.currentPageIndex.portrait
			][2];

			currentPageIndex.landscape = Math.floor(currentStartDateIndex / 7);
		}

		if (screenOrientation === 'portrait') {
			const currentStartDateIndex = this.state.pagesLandscape[
				this.state.currentPageIndex.landscape
			][3];

			currentPageIndex.portrait = Math.floor(currentStartDateIndex / 5);
		}

		this.setState({
			screenOrientation,
			screenDimensions,
			currentPageIndex
		});
	};

	todayButtonPressHandler = () => {
		const currentPageIndex = {
			portrait: this.state.todaysPageIndex.portrait,
			landscape: this.state.todaysPageIndex.landscape
		};

		this.setState({ currentPageIndex });
	};

	onHorizontalScroll = event => {
		//Initialize Scroll Offset
		this.scrollOffset = this.scrollOffset
			? this.scrollOffset
			: this.state.screenOrientation === 'portrait'
				? this.state.todaysPageIndex.portrait *
					this.state.screenDimensions.x
				: this.state.todaysPageIndex.landscape *
					this.state.screenDimensions.x;

		//Current Offset Value
		const currentOffset = event.nativeEvent.contentOffset.x;

		const changeState =
			Math.abs(this.scrollOffset - currentOffset) /
				this.state.screenDimensions.x >=
				0.9 ||
			Math.abs(this.scrollOffset - currentOffset) /
				this.state.screenDimensions.x <=
				1.1;

		//Change State
		if (changeState) {
			const currentPageIndexValue = Math.floor(
				event.nativeEvent.contentOffset.x /
					this.state.screenDimensions.x
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

			this.scrollOffset = currentOffset;
		}
	};

	render() {
		const datesData = this.state.datesData;
		let pageData = null;
		let currentPageIndex = null;

		if (this.state.screenOrientation === 'portrait') {
			pageData = this.state.pagesPortrait;
			currentPageIndex = this.state.currentPageIndex.portrait;
		} else {
			pageData = this.state.pagesLandscape;
			currentPageIndex = this.state.currentPageIndex.landscape;
		}

		const currentMonth = datesData[pageData[currentPageIndex][0]].month;
		const currentYear = datesData[pageData[currentPageIndex][0]].year;
		const todaysMonth = datesData[this.state.todaysIndex].month;

		const currentColorIndex =
			currentMonth - todaysMonth < 0
				? APP_BAR_COLORS.length + (currentMonth - todaysMonth)
				: currentMonth - todaysMonth;

		return (
			<View style={{ flex: 1 }}>
				<AppBar
					appBarColor={APP_BAR_COLORS[currentColorIndex]}
					todaysDate={datesData[this.state.todaysIndex]}
					currentMonth={currentMonth}
					currentYear={currentYear}
					screenOrientation={this.state.screenOrientation}
					todayButtonPressHandler={this.todayButtonPressHandler}
				/>
				<DatesHorizontalList
					screenDimensions={this.state.screenDimensions}
					headerColor={APP_BAR_COLORS[currentColorIndex]}
					hourRowsList={HOURS_LIST}
					currentTime={this.state.currentTime}
					datesData={this.state.datesData}
					pageData={pageData}
					eventsData={
						this.state.eventsData ? this.state.eventsData : []
					}
					currentPageIndex={currentPageIndex}
					todaysIndex={this.state.todaysIndex}
					onHorizontalScroll={this.onHorizontalScroll}
				/>
			</View>
		);
	}
}

export default WeeklyCalendar;
