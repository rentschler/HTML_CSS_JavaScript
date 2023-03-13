//the forecast today in kelvin
const kelvin = 0;
//converting to celsius
const celsius = kelvin - 273;
//convertig to fahrenheit
const fahrenheit =
    Math.floor(celsius * (9/5) + 32);
//print the value in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit`);
//using the newton scale
const newton = celsius * (33/100);
console.log(`The temperature is ${newton} degrees in Newton`);