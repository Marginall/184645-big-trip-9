// import {convertMillisec} from 'util';

export const createEvent = ({tripPointType, destination, startDate, finishDate, price, offers, description}) => {

  const convertMillisec = (millisec) => {
    let s = Math.floor(millisec / 1000);
    let m = Math.floor(s / 60);
    s = s % 60;
    let h = Math.floor(m / 60);
    m = m % 60;
    let d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
    return h + `H` + ` ` + m + `M`;
  };

  return `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${tripPointType.name}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${tripPointType.name} ${tripPointType.move ? ` to` : ` in`} ${destination}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${new Date(startDate)}">${new Date(startDate).getHours()} : ${new Date(startDate).getMinutes()}</time>
          &mdash;
          <time class="event__end-time" datetime="${new Date(finishDate)}">${new Date(finishDate).getHours()} : ${new Date(finishDate).getMinutes()}</time>
        </p>
        <p class="event__duration">${convertMillisec(finishDate - startDate)}</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">${offers.name}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${offers.price}</span>
        </li>
      </ul>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};
