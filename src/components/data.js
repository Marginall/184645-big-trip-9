import {randomNumber} from '../util/util';
import {randomDate} from '../util/util';

const descriptionFrom = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`.`);
const getDescription = (descript)=>{
  let description = ``;
  let i = randomNumber(3) + 1;
  for (i; i--;) {
    description = description + descript[randomNumber(11)] + `.`;
  }
  return description;
};
getDescription(descriptionFrom);

export const tripPointTypes = [
  {name: `bus`, move: true},
  {name: `drive`, move: true},
  {name: `ship`, move: true},
  {name: `taxi`, move: true},
  {name: `train`, move: true},
  {name: `transport`, move: true},
  {name: `check-in`, move: false},
  {name: `restaurant`, move: false},
  {name: `sightseeing`, move: false}
];

export const destinations = [
  `Moscow`,
  `Paris`,
  `Kiev`,
  `Istanbul`,
  `Praga`
];

export const offers = [
  {name: `Add luggage`, price: randomNumber(1000)},
  {name: `Switch to comfort class`, price: randomNumber(1000)},
  {name: `Add meal`, price: randomNumber(1000)},
  {name: `Choose seats`, price: randomNumber(1000)}
];

export const getTripPoint = () => [
  {
    destinations: destinations[randomNumber(5)],
    tripPointType: tripPointTypes[randomNumber(9)],
    startDate: randomDate(-3, 4),
    finishDate: randomDate(4, 5),
    price: randomNumber(1000),
    offers: offers[randomNumber(4)],
    description: getDescription(descriptionFrom)
  },
  {
    destinations: destinations[randomNumber(5)],
    tripPointType: tripPointTypes[randomNumber(9)],
    startDate: randomDate(-3, 4),
    finishDate: randomDate(4, 5),
    price: randomNumber(1000),
    offers: offers[randomNumber(4)],
    description: getDescription(descriptionFrom)
  },
  {
    destinations: destinations[randomNumber(5)],
    tripPointType: tripPointTypes[randomNumber(9)],
    startDate: randomDate(-3, 4),
    finishDate: randomDate(4, 5),
    price: randomNumber(1000),
    offers: offers[randomNumber(4)],
    description: getDescription(descriptionFrom)
  }
];

export const filters = [
  {title: `everything`, checked: true},
  {title: `future`, checked: false},
  {title: `past`, count: false}
];

export const menu = [
  {title: `table`, active: true},
  {title: `stats`, active: false}
];
