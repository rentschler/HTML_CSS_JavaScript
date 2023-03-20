//1
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
    return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100, NaN, undefined];

const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});

console.log(onlyNumbers);

//2 forEach
//.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))

//3 map
//.map() executes the same code on every element in an array and returns a new array with the updated elements.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(number => number / 100);
console.log(smallNumbers);


//4 filter
//.filter() checks every element in an array to see if it meets certain criteria
// and returns a new array with the elements that return truthy for the criteria.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumberss = randomNumbers.filter(number => number < 250);
console.log(smallNumberss);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => word.length > 7);
console.log(favoriteWords);


//5 findIndex
//.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function.
// It returns -1 if none of the elements in the array satisfies the condition.
const animalss = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalss.findIndex(animal => animal === 'elephant');
console.log(foundAnimal);

const startsWithS = animalss.findIndex(animal => animal[0].toLowerCase() === 's');
console.log(startsWithS);


//6 reduce
//The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.
//As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration,
// currentValue takes on the value of the current element in the looping process.
const newNumbers = [1, 3, 5, 7];
let inititalValue = 10;
const newSum = newNumbers.reduce((accumulator ,currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
},10);
console.log(newSum);


//7 iterator functions see there
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
    return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter(word => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5} ));


//8
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

//9
const numss = [-10,0, 1, 50, 75, 200, 350, 525, 1000];

const timesPI = (num) => num * Math.PI;
const greaterThanTimesPI = (numss.map(timesPI)).filter(
    num => num > Math.PI
);
const short = greaterThanTimesPI;
console.log(short);