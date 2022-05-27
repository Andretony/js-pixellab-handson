var person = {
  firstName: 'John',
  lastName: 'Constantine',
  email: 'constantin07@gmail.com',
  birthYear: 1987,
  zipCode: '900101',
  petName: 'Gigi',
  difference: '25',
  pets: [
    {
      name: 'Gigi',
      species: 'cat',
      age: 10,
    },
    {
      name: 'Mimi',
      species: 'dog',
      age: 5,
    },
    {
      name: 'kiki',
      species: 'parrot',
      age: 3,
    },
  ],
};

console.warn(
  'Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. ',
);

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2. `,
);

console.log((2022 - person.pets[2].age).toString());

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si
 animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent. `);

console.log((2022 - person.birthYear - person.pets[0].age).toString());

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.petName +
    ' este o diferenta de ' +
    person.difference +
    ' ani.',
);
