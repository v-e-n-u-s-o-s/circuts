var allBoxes = maxboardsizexPROMPT * maxboardsizeyPROMPT;

var upperspawn = 1;
var bottomspawn = maxboardsizeyPROMPT;

var blueturn = true;
var orangeturn = false;

$("[id='cross']").click(function () {
  var x = this.dataset.x;
  var y = this.dataset.y;
  var z = this.dataset.z;

  var y1 = parseInt(y) + 1;
  var y_1 = parseInt(y) - 1;

  var checkBlue = document.querySelector(
    "#cross[data-x='" + x + "'][data-y='" + y1 + "']"
  );

  var checkOrange = document.querySelector(
    "#cross[data-x='" + x + "'][data-y='" + y_1 + "']"
  );

  if (blueturn == true && y == bottomspawn && z == 0) {
    orangeturn = true;
    blueturn = false;
    this.className = "plusBLUE";
    this.dataset.z = 1;
  } else if (orangeturn == true && y == upperspawn && z == 0) {
    blueturn = true;
    orangeturn = false;
    this.dataset.z = 2;
    this.className = "plusORANGE";
  } else if (blueturn == true && z == 0 && checkBlue.dataset.z == 1) {
    orangeturn = true;
    blueturn = false;
    this.className = "plusBLUE";
    this.dataset.z = 1;
  } else if (orangeturn == true && z == 0 && checkOrange.dataset.z == 2) {
    blueturn = true;
    orangeturn = false;
    this.dataset.z = 2;
    this.className = "plusORANGE";
  } else if (blueturn == true && z == 2 && checkBlue.dataset.z == 1) {
    orangeturn = true;
    blueturn = false;
    this.dataset.z = 3;
    this.className = "plusBOTH";
  } else if (orangeturn == true && z == 1 && checkOrange.dataset.z == 2) {
    blueturn = true;
    orangeturn = false;
    this.dataset.z = 3;
    this.className = "plusBOTH";
  } else if (blueturn == true && z == 2 && checkBlue.dataset.z == 3) {
    orangeturn = true;
    blueturn = false;
    checkBlue.dataset.z = 3;
    this.dataset.z = 4;
    this.className = "plusBOTH";
  } else if (orangeturn == true && z == 1 && checkOrange.dataset.z == 3) {
    blueturn = true;
    orangeturn = false;
    checkOrange.dataset.z = 3;
    this.dataset.z = 5;
    this.className = "plusBOTH";
  } else if (blueturn == true && z == 2 && checkBlue.dataset.z == 4) {
    orangeturn = true;
    blueturn = false;
    checkBlue.dataset.z = 3;
    this.dataset.z = 4;
    this.className = "plusBOTH";
  } else if (orangeturn == true && z == 1 && checkOrange.dataset.z == 5) {
    blueturn = true;
    orangeturn = false;
    checkOrange.dataset.z = 3;
    this.dataset.z = 5;
    this.className = "plusBOTH";
  } else if (orangeturn == true && z == 1 && checkOrange.dataset.z == 5) {
  } else if (orangeturn == true && z == 1 && checkOrange.dataset.z == 5) {
  }
  if (blueturn == true && orangeturn == false) {
    document.querySelector("p").innerHTML = "Blue";
  } else if (orangeturn == true && blueturn == false) {
    document.querySelector("p").innerHTML = "Orange";
  }
});
