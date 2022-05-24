var person = {
  name: 'Andrei',
  surname: 'Anton',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

//prieteenii sunt prieteni pe friends
person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

//reverse
larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

//seteazal pe steven ca prieteni ai Andrei si lui Larry si invers
steven.friends.larry = larry;
steven.friends.andra = andra;
larry.friends.steven = steven;
andra.friends.steven = steven;

//seteazoa pe carol ca prietena a andrei si invers

carol.friends.andra = andra;
andra.friends.carol = carol;

delete person.friends.larry;
delete larry.friends.person;

console.log(`
  Afiseaza numele comple al lui Person folosinf obiectul Larry.
`);

console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

console.warn(`
Afiseaza numele complet al lui larry folosind obiectul person
`);

console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

console.warn(`cu carol`);

console.log(
  carol.friends.andra.friends.person.name +
    ' ' +
    carol.friends.andra.friends.person.surname,
);

console.warn(`Folosind obiectul Andra afiseaza numarul total de caractere al numelui complet al lui Person.
`);

console.log(
  (andra.friends.person.name + andra.friends.person.surname).length.toString(),
);
