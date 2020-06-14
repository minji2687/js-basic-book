var num1 = parseInt(prompt("첫번째 숫자는?"));
var num2 = parseInt(prompt("두번째 숫자는?"));
var result = addNumber(num1, num2);
alert("두수를 더한값은" + result + "입니다");

function addNumber(a, b) {
  var sum = a + b;
  return sum;
}
