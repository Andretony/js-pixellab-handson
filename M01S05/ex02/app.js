function calculateRectangleArea(L, l) {
  return L * l;
}

const anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);

console.warn(`Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9
`);

console.log(calculateRectangleArea(12, 9));

console.warn(
  `Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3`,
);

console.log(calculateRectangleArea(4, 3));

console.warn(`Afiseaza suprafata totala a unor dreptunghiuri

de 5 pe 3, respectiv 3 pe 2. Foloseste variabile`);

const square1 = calculateRectangleArea(5, 3);
console.log(square1);
const square2 = calculateRectangleArea(3, 2);
console.log(square2);

const square3 = calculateRectangleArea(15, 31);
const square4 = calculateRectangleArea(8, 9);
const square5 = calculateRectangleArea(10, 5);
const total = square3 + square4 + square5;
console.log(total);

const squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);
