var inputDate = document.querySelector("#input");
var luckyno = document.querySelector("#luckynumber");
var button = document.querySelector("#processbtn");
var outputDiv = document.querySelector(".output");
var form = document.querySelector("form");

var success = `<h1 style='color:green;'>Nice!!! Your b'day is lucky.</h1><img src='Images/happy.png'>`;
var failure =
  "<h1 style='color: red;' >Sorry!! Your b'day is not lucky.</h1><img src='Images/sad.png'>";

form.addEventListener("submit", (e) => {
  var sum = 0;
  e.preventDefault();
  var input = inputDate.value;
  var date = input.split("-").join("");

  for (item of date) {
    sum += Number(item);
  }
  if (luckyno.value >= 0) {
    if (sum % luckyno.value === 0) outputDiv.innerHTML = success;
    else outputDiv.innerHTML = failure;
  } else alert("Lucky number should be positive or 0.");
});
