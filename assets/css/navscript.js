function reduceMenu() {
  var x = document.getElementById("topNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}
