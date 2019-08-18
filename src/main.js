import {createTripInfo} from './components/trip';
import {createMenu} from './components/menu';
import {createFilter} from './components/filter';
import {createSort} from './components/sort';
import {renderPoint} from './components/card';
import {createEventForm} from './components/event-edit';

const renderComponents = (container, component, place) => {
  container.insertAdjacentHTML(place, component);
};

const tripInfoContainer = document.querySelector(`.trip-info`);
const tripControls = document.querySelector(`.trip-controls`);
const tripEventsContainer = document.querySelector(`.trip-events`);
const tripDaysContainer = `<ul class="trip-days"></ul>`;

renderComponents(tripInfoContainer, createTripInfo(), `afterbegin`);
renderComponents(tripControls, createMenu(), `afterbegin`);
renderComponents(tripControls, createFilter(), `beforeend`);
renderComponents(tripEventsContainer, createSort(), `beforeend`);
renderComponents(tripEventsContainer, tripDaysContainer, `beforeend`);

const daysList = tripEventsContainer.querySelector(`.trip-days`);
renderComponents(daysList, renderPoint(), `afterbegin`);

const dayEventsList = daysList.querySelector(`.trip-events__list`);
renderComponents(dayEventsList, createEventForm(), `afterbegin`);
