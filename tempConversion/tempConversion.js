var ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  if (celsius - parseInt(celsius) !== 0) celsius = parseFloat(celsius.toFixed(1));

  return celsius;
}

var ctof = function(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  if (fahrenheit - parseInt(fahrenheit) !== 0) fahrenheit = parseFloat(fahrenheit.toFixed(1));

  return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
