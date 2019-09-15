import {createElement} from '../util/util';

export const createFilter = (filter) => {
  return `
    <div class="trip-filters__filter">
      <input id="filter-${filter.title}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.title}">
      <label class="trip-filters__filter-label" for="filter-${filter.title}">${filter.title}</label>
    </div>
  `;
};

export class Filter {
  constructor(filter) {
    this._filter = filter;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    return `
    <div class="trip-filters__filter">
      <input id="filter-${filter.title}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.title}">
      <label class="trip-filters__filter-label" for="filter-${filter.title}">${filter.title}</label>
    </div>
  `;
  }
}
