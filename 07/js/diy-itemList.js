var itemList = [];

var button = document.querySelector("#add");

button.addEventListener("click", addList);

function addList() {
  var item = document.querySelector("#item");
  if (item.value !== NaN) {
    itemList.push(item.value);
    item.value = "";
  }

  showList();
  item.value = "";
}

function showList() {
  var list = "<ul>";
  for (var i = 0; i < itemList.length; i++) {
    list +=
      "<li>" +
      itemList[i] +
      "<span class='close' id=" +
      i +
      ">X</span>" +
      "</li>";
  }
  list += "</ul>";

  document.querySelector("#itemList").innerHTML = list;
  var remove = document.querySelectorAll(".close");
  // nodeList를 반환하기때문에 이벤트리스너를 걸 때 for문을 이용해서
  //각각의 Element에 이벤트를 걸어줘야함.

  for (var i = 0; i < itemList.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  console.log(this);
  var id = this.getAttribute("id");
  itemList.splice(id, 1);

  showList();
}
