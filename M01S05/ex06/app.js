const person = {
  getName: function () {
    return 'Andrei Anton';
  },
  getAge: function () {
    return 32;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  //return person.getName
  //return person.getAge
  return person[methodName]();
}

console.warn(`Folosind accesorul salveaza numele mic al persoanei
 intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”`);

const personFirstName = accessor('Name');
console.log(`Eu sunt ${personFirstName}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);

const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - person.getAge();
console.log(`${personBirthYear}`);

console.warn(
  `Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”`,
);

console.log(
  `Ma numesc ${person.getName()}, am ${person.getAge()} ani si m-am nascut in anul ${personBirthYear}.`,
);

console.warn(`Folosind accesorul afiseaza numele persoanei.`);

const personFullName = accessor('Name');
console.log(personFullName);

console.warn(`Afiseaza varsta persoanei.`);

const personAge = accessor('Age');
console.log(personAge);

console.warn(
  `: Functia "accessor" Metoda console.log trebuie invocata cu textul "Ma numesc Andrei Anton si am 32 ani!".`,
);

console.log(`Ma numesc ${personFullName} si am ${personAge} ani!`);

console.log(`M-am nascut in ${personBirthYear}.`);
