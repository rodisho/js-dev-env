import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I Would pay ${courseValue} for this awesome course!`);
