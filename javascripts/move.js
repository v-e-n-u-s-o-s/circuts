var allBoxes = mx * my;

var upperspawn = 1;
var bottomspawn = my;

var turn = true;

function clearBoard() {
  for (var y = 1; y <= my; y++) {
    for (var x = 1; x <= mx; x++) {
      let c = document.querySelector(
        "#c[data-x='" + x + "'][data-y='" + y + "']"
      );
      c.dataset.z = 0;
      c.className = "bla";
      turn = true;
    }
  }
}

$("[id='c']").click(function () {
  var x = this.dataset.x;
  var y = this.dataset.y;
  var z = this.dataset.z;

  var y1 = parseInt(y) + 1;
  var y_1 = parseInt(y) - 1;

  var checkBlue = document.querySelector(
    "#c[data-x='" + x + "'][data-y='" + y1 + "']"
  );

  var checkOrange = document.querySelector(
    "#c[data-x='" + x + "'][data-y='" + y_1 + "']"
  );

  if (turn == true && y == bottomspawn && z == 0) {
    turn = false;
    this.className = "blu";
    this.dataset.z = 1;
  } else if (turn == false && y == upperspawn && z == 0) {
    turn = true;
    this.dataset.z = 2;
    this.className = "ora";
  } else if (turn == true && z == 0 && checkBlue.dataset.z == 1) {
    turn = false;
    this.className = "blu";
    this.dataset.z = 1;
  } else if (turn == false && z == 0 && checkOrange.dataset.z == 2) {
    turn = true;
    this.dataset.z = 2;
    this.className = "ora";
  } else if (turn == true && z == 2 && checkBlue.dataset.z == 1) {
    turn = false;
    this.dataset.z = 3;
    this.className = "bot";
  } else if (turn == false && z == 1 && checkOrange.dataset.z == 2) {
    turn = true;
    this.dataset.z = 3;
    this.className = "bot";
  } else if (turn == true && z == 2 && checkBlue.dataset.z == 3) {
    turn = false;
    checkBlue.dataset.z = 3;
    this.dataset.z = 4;
    this.className = "bot";
  } else if (turn == false && z == 1 && checkOrange.dataset.z == 3) {
    turn = true;
    checkOrange.dataset.z = 3;
    this.dataset.z = 5;
    this.className = "bot";
  } else if (turn == true && z == 2 && checkBlue.dataset.z == 4) {
    turn = false;
    checkBlue.dataset.z = 3;
    this.dataset.z = 4;
    this.className = "bot";
  } else if (turn == false && z == 1 && checkOrange.dataset.z == 5) {
    turn = true;
    checkOrange.dataset.z = 3;
    this.dataset.z = 5;
    this.className = "bot";
  } else if (turn == true && z == 1 && checkOrange.dataset.z == 5) {
  } else if (turn == true && z == 1 && checkOrange.dataset.z == 5) {
  }
  if (
    (this.dataset.z == 1 || this.dataset.z == 4 || this.dataset.z == 3) &&
    this.dataset.y == 1
  ) {
    alert("Blue won!");
    clearBoard();
  } else if (
    (this.dataset.z == 2 || this.dataset.z == 5 || this.dataset.z == 3) &&
    this.dataset.y == my
  ) {
    clearBoard();
    alert("Orange won!");
  }
  if (turn == false) {
    document.querySelector("p").innerHTML = "Blue";
  } else if (turn == true) {
    document.querySelector("p").innerHTML = "Orange";
  }
});
