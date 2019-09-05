import {createTripInfo} from './components/trip';
import {createMenu} from './components/menu';
import {createFiltersForm} from './components/filtersForm';
import {createFilter} from './components/filter';
import {createSort} from './components/sort';
import {createEvent} from './components/event';
import {createEventList} from './components/event-list';
import {createEventForm} from './components/event-edit';
import {getTripPoint, filters, menu} from './components/data';

const renderComponents = (container, component, place) => {
  container.insertAdjacentHTML(place, component);
};

const tripInfoContainer = document.querySelector(`.trip-info`);
const tripControls = document.querySelector(`.trip-controls`);
const tripEventsContainer = document.querySelector(`.trip-events`);
const tripDaysContainer = `<ul class="trip-days"></ul>`;

renderComponents(tripInfoContainer, createTripInfo(), `afterbegin`);
renderComponents(tripControls, createMenu(menu), `afterbegin`);
renderComponents(tripControls, createFiltersForm(), `beforeend`);

const filtersForm = document.querySelector(`.trip-filters`);

renderComponents(filtersForm, filters.map((filter) => createFilter(filter)), `beforeend`);
renderComponents(tripEventsContainer, createSort(), `beforeend`);
renderComponents(tripEventsContainer, tripDaysContainer, `beforeend`);

const daysList = tripEventsContainer.querySelector(`.trip-days`);
renderComponents(daysList, createEventList(), `afterbegin`);
const eventsList = tripEventsContainer.querySelector(`.trip-events__list`);
const TRIP_COUNT = 4;

for (let i = 0; i < TRIP_COUNT; i++) {
  renderComponents(eventsList, createEvent(getTripPoint()), `afterbegin`);
}

// const dayEventsList = daysList.querySelector(`.trip-events__list`);
// renderComponents(dayEventsList, createEventForm(), `afterbegin`);
