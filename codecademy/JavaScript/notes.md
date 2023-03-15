
````javascript
// function
function plantNeedsWater(day) {
    return day === 'Wednesday' ? true : false;
}

// function expression
const plantNeedsWater = function (day){
    return day === 'Wednesday' ? true : false;
}

// arrow functions
const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
}

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

````