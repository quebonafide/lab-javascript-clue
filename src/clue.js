// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: 'a',
        lastName: 'b',
        occupation: '',
        age: '',
        description: '',
        image: '',
        color: ''
    },
    {
        firstName: 'ab',
        lastName: 'ab',
        occupation: '',
        age: '',
        description: '',
        image: '',
        color: ''
    },
    {
        firstName: 'a',
        lastName: 'a',
        occupation: '',
        age: '',
        description: '',
        image: '',
        color: ''
    },
    {
        firstName: 'a',
        lastName: 'a',
        occupation: '',
        age: '',
        description: '',
        image: '',
        color: ''
    },
    {
        firstName: 'a',
        lastName: 'a',
        occupation: '',
        age: '',
        description: '',
        image: '',
        color: ''
    },
    {
        firstName: 'a',
        lastName: 'a',
        occupation: '',
        age: '',
        description: '',
        image: '',
        color: ''
    },
];

// Rooms Collection
const roomsArray = [
    {
        name: '1'
    },
    {
        name: '2'
    },
    {
        name: '3'
    },
    {
        name: '4'
    },
    {
        name: '5'
    },
    {
        name: '6'
    },
    {
        name: '7'
    },
    {
        name: '8'
    },
    {
        name: '9'
    },
    {
        name: '10'
    },
    {
        name: '11'
    },
    {
        name: '12'
    },
    {
        name: '13'
    },
    {
        name: '14'
    },
    {
        name: '15'
    },
    
];

// Weapons Collection
const weaponsArray = [
    {
        name: 'ff',
        weight: ''
    },
    {
        name: 'ff',
        weight: ''
    },
    {
        name: 'ff',
        weight: ''
    },
    {
        name: 'ff',
        weight: ''
    },
    {
        name: 'ff',
        weight: ''
    },
    {
        name: 'ff',
        weight: ''
    },
    {
        name: 'ff',
        weight: ''
    },
    {
        name: 'ff',
        weight: ''
    },
    {
        name: 'ff',
        weight: ''
    }
];

// ITERATION 2
function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
}
let envelope = pickMystery();
// ITERATION 3
function revealMystery(object) {
   return (`${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`);
}
console.log(revealMystery(envelope))