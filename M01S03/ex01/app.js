var object = {
  name: 'Andrei',
  surname: 'Anton',
  age: 32,
  petOwner: false,
  carOwner: true,
};

console.log(object.name);
//==='35'
console.log(object.age.toString());

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.log((2022 - object.age).toString());

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani' + '.',
);

console.log(
  object.name + ' s-a nascut in ' + (2022 - object.age).toString() + '.',
);
