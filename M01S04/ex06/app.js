var person = {
  name: 'Andrei',
  surname: 'Anton',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  'Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.',
);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  console.log(skill);
}

console.warn(`In mod similar, afiseaza skillurile care  incep cu c`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('c') === true) {
    console.log(skill);
  }
}

console.warn(`In mod similar, afiseaza skillurile care nu incep cu j`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
}

console.warn(`Folosind un for afiseaza propozitia:
"Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy.`);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    //ultima iteratie
    punctuation = '.';
  }
  // v1 concatenare
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(
  `Afiseaza diferenta de varsta dintre pesoana si prietenii din arrayul friends  doar dac aceasta este mai mare de 2 ani.`,
);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}

console.warn(`
folosind proprietatea length a arrayului skills si o bluca for afiseaza in ordine inversa elemntele arrayului skilss. Atentie///
`);

for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(
  `Folosind un for, afiseaza numarul total de ani pe care il au persoanele
  din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.`,
);

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendsAge = 0;
  friendsAge = friendsAge + friend.age;
}
console.log(friendsAge);

console.warn(`Folosind un for, afiseaza suma anilor de nastere a persoanelor`);

var friendsYear = 0;
var birthYear = 2022;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendsYear = friendsYear + Math.abs(friend.age - birthYear);
  var year = sumYear.toString;
}
console.log(year);

console.warn(
  `Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.`,
);

var message = ' ';
var sum = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);
  sum = sum + friend.age;

  message =
    message +
    'Intre ' +
    person.name +
    ' si ' +
    friends.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani.';

  if (sum % 2 !== 0) {
    console.log(message.trim());
  }
}

console.warn(
  `Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx.`,
);
var message = 'Numele de familie ale prietenilor mei sunt:';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message = message + friends.surname + punctuation;
}
console.log(message);

console.warn(
  `Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);

var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friends = person.friends[i];
  sumAge = sumAge + friends.age;
}
console.log(sumAge.toString());

console.warn(
  `Afiseaza diferenta de varsta dontre pesoana si prietenii din arrayul friends.`,
);
for (var i = 0; i < person.friends.length; i++) {
  var friends = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(ageDiff.toString());
}
