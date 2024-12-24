const numberToPrice = function (number) {
  if (!number || isNaN(number)) {
    return "NaN";
  }
  if (/\.d{3}/.test(number)) {
    number = parseInt(number * 100) / 100;
  }
  number = number.toString();
  while (/\d+\d{3}/.test(number)) {
    number = number.replace(/(\d+)(\d{3})/, "$1 $2");
  }
  if (-1 == number.indexOf(".")) {
    return number + ".00";
  }
};
console.log(numberToPrice("@"));
console.log(numberToPrice(-5));
