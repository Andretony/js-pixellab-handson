const person = {
  getName: function () {
    return 'Andrei Anton';
  },
  getAge: () => {
    return 32;
  },
};

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()`);

const personName = person.getName();
const personFirstName = personName.split(' ')[0];
console.log(personFirstName);

console.warn(`Afiseaza anul de nastere al persoanei folosind metoda
getAge() si anul curent.`);

const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - person.getAge();
console.log(personBirthYear);

console.warn(`Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul
curent si metoda getAge(). (Exemplu: ‘87).`);

console.log(`'${personBirthYear.toString().slice(-2)}`);

console.warn(`Afiseaza numele intreg al persoanei folosind metoda getName()`);

const personFullName = person.getName();
console.log(personFullName);

console.warn(`Afiseaza varsta persoanei folosind metoda getAge()`);

const personAge = person.getAge();
console.log(personAge);

console.warn(
  `Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”`,
);

console.log(`M-am nascut in ${personBirthYear}.`);

console.warn(
  `Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”`,
);

console.log(
  `Ma numesc ${personFullName} m-am nascut acum ${personAge} ani in anul ${personBirthYear}!`,
);

console.warn(
  `Metoda console.log ar fi trebuit chemata cu valoarea: "Ma numesc Andrei Anton si am 32 ani.`,
);

console.log(`Ma numesc ${personFullName} si am ${personAge} ani.`);
