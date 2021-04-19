var ab = mx * my;

var t = true;

function clearBoard() {
  for (var y = 1; y <= my; y++) {
    for (var x = 1; x <= mx; x++) {
      let c = document.querySelector(
        "#c[data-x='" + x + "'][data-y='" + y + "']"
      );
      c.dataset.z = 0;
      c.className = "bla";
      t = true;
    }
  }
}

function c() {
  var x = this.dataset.x;
  var y = this.dataset.y;
  var z = this.dataset.z;

  var cb = document.querySelector(
    "#c[data-x='" + x + "'][data-y='" + (parseInt(y) + 1) + "']"
  );

  var co = document.querySelector(
    "#c[data-x='" + x + "'][data-y='" + (parseInt(y) - 1) + "']"
  );
  if (t) {
  } else if (!t) {
  }
  if (t == true && y == my && z == 0) {
    t = false;
    this.className = "blu";
    this.dataset.z = 1;
  } else if (t == false && y == 1 && z == 0) {
    t = true;
    this.dataset.z = 2;
    this.className = "ora";
  } else if (t == true && z == 0 && cb.dataset.z == 1) {
    t = false;
    this.className = "blu";
    this.dataset.z = 1;
  } else if (t == false && z == 0 && co.dataset.z == 2) {
    t = true;
    this.dataset.z = 2;
    this.className = "ora";
  } else if (t == true && z == 2 && cb.dataset.z == 1) {
    t = false;
    this.dataset.z = 3;
    this.className = "bot";
  } else if (t == false && z == 1 && co.dataset.z == 2) {
    t = true;
    this.dataset.z = 3;
    this.className = "bot";
  } else if (t == true && z == 2 && cb.dataset.z == 3) {
    t = false;
    cb.dataset.z = 3;
    this.dataset.z = 4;
    this.className = "bot";
  } else if (t == false && z == 1 && co.dataset.z == 3) {
    t = true;
    co.dataset.z = 3;
    this.dataset.z = 5;
    this.className = "bot";
  } else if (t == true && z == 2 && cb.dataset.z == 4) {
    t = false;
    cb.dataset.z = 3;
    this.dataset.z = 4;
    this.className = "bot";
  } else if (t == false && z == 1 && co.dataset.z == 5) {
    t = true;
    co.dataset.z = 3;
    this.dataset.z = 5;
    this.className = "bot";
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
  if (t) {
    document.querySelector("p").innerHTML = "Blue";
  } else if (!t) {
    document.querySelector("p").innerHTML = "Orange";
  }
}

for (i = 0; i <= ab; i++) {
  document.querySelectorAll("#c")[i].onclick = c;
}
