const dateBuilder = [
  function () {
    return '2022';
  },
  function () {
    return 'Iunie';
  },
  function () {
    return '24';
  },
];

dateBuilder[3] = function () {
  return 'Duminca';
};

console.warn(`
Afiseaza propozotoa suntem luna ll anul aa
`);

console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn(`Aiseaza propoziita "astasi este zz`);
console.log(`Astazi este ${dateBuilder[1]()}.`);
