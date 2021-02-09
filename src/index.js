import _ from 'lodash';
import style from './style.css';
// import Tiger from './utilities';
// import { hello } from './utilities';
// import { name } from './utilities';

// console.log(utilities.nijyou(3));
// console.log(utilities.name);

// hello();

// console.log(Tiger.say());

function component () {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '★★★★'];
  element.innerHTML  = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());

// const test = 'tt';
