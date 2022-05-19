var inputRadius = document.getElementById('radius');
var result = document.getElementById('result');
var form = document.querySelector('.sphere-volume');

form.addEventListener('submit', function (event) {
  var radius = inputRadius.value || 0;
  var result = 0;

  result = (4 / 3) * Math.PI * Math.pow(radius, 3);

  elementResult.innerText = result;

  event.preventDefault();
});