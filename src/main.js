import {createTripInfo} from './components/trip';
import {createMenu} from './components/menu';
import {createFiltersForm} from './components/filtersForm';
import {createFilter} from './components/filter';
import {createSort} from './components/sort';
import {createEvent} from './components/event';
import {createEventList} from './components/event-list';
import {createEventForm} from './components/event-edit';
import {getTripPoint, filters, menu, destinationList} from './components/data';
import {randomNumber} from './util/util';

const DAYS = 3;
const TRIP_COUNT = 4;

const renderComponents = (container, component, place) => {
  container.insertAdjacentHTML(place, component);
};

const getCities = (citiesList, count) => {
  let cities = [];
  const arr = new Array(count);
  arr.fill(``).map(() => cities.push(citiesList[randomNumber(5)]));

  cities.splice(1, 0, `...`);
  return cities;
};

const tripInfoContainer = document.querySelector(`.trip-info`);
const tripControls = document.querySelector(`.trip-controls`);
const tripEventsContainer = document.querySelector(`.trip-events`);
const tripDaysContainer = `<ul class="trip-days"></ul>`;
const startDate = `Mar 18&nbsp;&mdash;&nbsp;21`;

renderComponents(tripInfoContainer, createTripInfo(startDate, getCities(destinationList, 2)), `afterbegin`);
renderComponents(tripControls, createMenu(menu), `afterbegin`);
renderComponents(tripControls, createFiltersForm(), `beforeend`);

const filtersForm = document.querySelector(`.trip-filters`);

renderComponents(filtersForm, filters.map((filter) => createFilter(filter)).join(``), `beforeend`);
renderComponents(tripEventsContainer, createSort(), `beforeend`);
renderComponents(tripEventsContainer, tripDaysContainer, `beforeend`);
const tripDays = tripEventsContainer.querySelector(`.trip-days`);

const createDay = (index, tripCount) => {
  renderComponents(tripDays, createEventList(index), `beforeend`);
  let daysList = document.querySelectorAll(`.day`);
  let eventList = daysList[index].querySelector(`.trip-events__list`);
  new Array(tripCount).fill(``).map(() => index === 0 ? renderComponents(eventList, createEventForm(getTripPoint()[index]), `afterbegin`) : renderComponents(eventList, createEvent(getTripPoint()[index]), `beforeend`));
};

new Array(DAYS).fill(``).map((day, index) => index === 0 ? createDay(index, 1) : createDay(index, TRIP_COUNT));
