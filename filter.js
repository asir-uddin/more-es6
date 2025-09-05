const number = [ 4, 5, 6, 7, 8, 9, 15, 56];

const greaterThen6 = number.filter(x => x > 6);

const evenNumber = number.filter(num => num % 2 === 0);
const oddNumber = number.filter(num => num % 2 === 1);
console.log(oddNumber)
// console.log(evenNumber);
// console.log(greaterThen6);