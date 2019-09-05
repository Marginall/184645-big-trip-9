export const createFilter = (filter) => {
  return `
    <div class="trip-filters__filter">
      <input id="filter-${filter.title}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.title}">
      <label class="trip-filters__filter-label" for="filter-${filter.title}">${filter.title}</label>
    </div>
  `;
};
