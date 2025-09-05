const numbers = [2, 4, 5, 6, 7, 8];
// const doubled = [];

// for(const number of numbers){
//     const result = number*2;
//     doubled.push(result);
// }
//  console.log(doubled)


// const doubledIt = x => x * 2;
// const doubled = numbers.map(doubledIt);


const doubled = numbers.map(num => num*5);
const divided = numbers.map(x => x/2);

const square = numbers.map(num => num*num);


const students = ['shabnur', 'bobita', 'kobita','popi', 'opu'];
// const nameLengths = students.map(name => name.length);
// const nameFirst = students.map( name => name[0]);
// const nameFirst = students.map( name => name[0].toLowerCase());
const nameFirst = students.map( name => name[0].toUpperCase());

const result = numbers.map((num, index) => {
        console.log(num*index);
        return num*index;
})
console.log(result);
// console.log(nameLengths);