const myAge = 4;
//The first two years of a dog’s life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;
//Each year following equates to 4 dog years.
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears + " " + laterYears);
const myAgeInDogYears = earlyYears + laterYears;
const myName = 'Joni'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);