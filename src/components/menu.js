import {createElement} from '../util/util';

export class Menu {
  constructor(title, active) {
    this._title = title;
    this._active = active;
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
      <nav class="trip-controls__trip-tabs trip-tabs">
        <a class="trip-tabs__btn ${this._active ? `trip-tabs__btn--active` : ``}" href="#">${this._title}</a>
      </nav>`;
  }
}
