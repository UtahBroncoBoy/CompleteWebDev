let myObject = {
  member1: 'Jeff',
  member2: 'Michelle',
  member3: 'Alec',
  member4: 'Chelise',
  member5: 'Dallin',
  member6: 'Preston'
}

let arrayOfObjects = Object.keys(myObject);

// Object.values(myObject).forEach( value => console.log(value));

// Object.entries(myObject).forEach( value => console.log(value));

Object.keys(myObject).forEach( value => console.log(value));
