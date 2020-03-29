function addItem(item, event) {
  event.preventDefault();
  var div = document.createElement("div");
  var auxDiv = document.createElement("div");
  var checkBtn = document.createElement("button");
  checkBtn.innerHTML = "check";
  checkBtn.setAttribute("class", "check-btn");
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.setAttribute("class", "delete-btn");
  div.className = "item-div";
  auxDiv.className = "buttons-item-div";
  div.innerHTML = item;
  auxDiv.appendChild(checkBtn);
  auxDiv.appendChild(deleteBtn);
  div.appendChild(auxDiv);
  var li = document.createElement("li");
  li.setAttribute("id", item);
  li.appendChild(div);
  list.appendChild(div);
}

let addBtn = document.getElementById("addItemBtn");
let input = document.getElementsByTagName("input")[0];
let list = document.getElementsByTagName("ul")[0];

addBtn.addEventListener("click", function(event) {
  addItem(input.value, event);
});

list.addEventListener("click", function(event) {
  let target = event.target;

  if (target.tagName != "BUTTON") return;

  if (target.className == "check-btn") {
    console.log("check button");
  }

  if (target.className == "delete-btn") {
    console.log("del button");
  }
});
