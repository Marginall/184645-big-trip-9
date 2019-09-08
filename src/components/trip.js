export const createTripInfo = (startDate, cities) => {
  return `
    <div class="trip-info__main">
      <h1 class="trip-info__title">
        ${cities.map((city, index) => index === cities.length - 1 ? `${city}` : `${city + ` ` + `&mdash;` + ` `}`).join(``)}
      </h1>
      <p class="trip-info__dates">${startDate}</p>
    </div>
  `;
};
