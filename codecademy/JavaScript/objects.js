// At their core, JavaScript objects are containers storing related data and functionality
let spaceship2 = {}; // spaceship is an empty object

// An object literal with two key-value pairs
let spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
};
// Write your fasterShip object literal below
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
};
let spaceship3 = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship3.numCrew;
const planetArray = spaceship3.flightPath;

//We must use bracket notation when accessing keys that have numbers,
//   paces, or special characters in them.

let spaceship4 = {
    'Fuel Type': 'Turbo Fuel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
};

let propName = 'Active Mission';

// Write your code below
let isActive = spaceship4["Active Mission"];
console.log(isActive);

// With bracket notation you can also use a variable inside the brackets to select the keys of an object.
let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'


// property assignement
// One of two things can happen with property assignment:

// If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
// If there was no property with that name, a new property will be added to the object.

// You can delete a property from an object with the delete operator.


spaceship.color = 'glorious gold';
spaceship.numEngines = 4;
delete spaceship['Secret Mission'];

// When the data stored on an object is a function we call that a method.
// A property is what an object has, while a method is what an object does.

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
    retreat() {
        console.log(retreatMessage);
    },
    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
};
alienShip.retreat();
alienShip.takeOff();

let spaceship5 = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};
let capFave = 'pasta';
spaceship5.crew.captain['favorite foods'][0] = capFave;
let traveller = {
    name: 'joni',
    age: 19
};
spaceship5.passengers = [traveller];
let firstPassenger = spaceship5.passengers[0];

// Objects are passed by reference. This means when we pass a variable assigned to an object into a 
// function as an argument, the computer interprets the parameter name as pointing to the space in memory 
// holding that object. As a result, functions which change object properties actually mutate the object
//  permanently

const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
}
const remotelyDisable = obj => {
    obj.disabled = true;
}
greenEnergy(spaceship4);
remotelyDisable(spaceship4)
console.log(spaceship4);


// for...in will execute a given block of code for each property in an object.
