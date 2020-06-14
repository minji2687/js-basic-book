var now = new Date();
var firstDay = new Date("2020-05-22");

var passedDay = now.getTime() - firstDay.getTime();

document.querySelector("#accent").innerText =
  Math.round(passedDay / (1000 * (60 * 60 * 24))) + "일";

function calcDay(day) {
  var future = firstDay.getTime() + day * (1000 * (60 * 60 * 24));
  var someDay = new Date(future);

  var year = someDay.getFullYear();
  var month = someDay.getMonth() + 1;
  var date = someDay.getDate();

  document.querySelector("#date" + day).innerText =
    year + "년 " + month + "월 " + date + "일 ";
}

calcDay(100);
calcDay(200);
calcDay(365);
calcDay(500);
