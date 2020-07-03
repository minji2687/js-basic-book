var numbers = [2, 4, 6, 8, 10];
showArray(numbers);

function showArray(arr) {
  var str = "<table><tr>";
  for (var i = 0; i < arr.length; i++) {
    str += "<td>" + arr[i] + "</td>";
  }
  var lastNum = 0;
  for (var i = 0; i < arr.length; i++) {
    lastNum += arr[i];
  }
  str += "<td>" + lastNum + "</td>";
  str += "</tr></table>";
  document.write(str);
}
