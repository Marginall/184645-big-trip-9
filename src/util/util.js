export const convertMillisec = (millisec) => {
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

export const randomNumber = (number)=> Math.floor(Math.random() * number);
export const randomDate = (lowerLimit, dayCount)=> Date.now() + lowerLimit * 24 * 60 * 60 * 1000 + randomNumber(dayCount) * 24 * 60 * 60 * 1000;

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

export default {randomNumber, randomDate, convertMillisec, createElement, render};
