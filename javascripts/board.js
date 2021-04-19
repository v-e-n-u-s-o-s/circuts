var mx;
var my;

function sr() {
  var parameters = location.search.substring(1).split("&");
  var temp = parameters[0].split("=");
  x = unescape(temp[1]);
  temp = parameters[1].split("=");
  y = unescape(temp[1]);
  return [x, y];
}

window.onload = sr();

mx = sr()[0];
my = sr()[1];

function bc(bx, by) {
  for (var y = 1; y <= by; y++) {
    for (var x = 1; x <= bx; x++) {
      var div = document.createElement("div");
      div.id = "c";
      div.className = "bla";
      div.dataset.x = x;
      div.dataset.y = y;
      div.dataset.z = 0;

      document.querySelector("#b").append(div);
    }
  }
  var b = document.getElementById("b");
  b.style.gridTemplateRows = "repeat(" + by + ", 1fr)";
  b.style.gridTemplateColumns = "repeat(" + bx + ", 1fr)";
}

setInterval(() => {
  for (var y = 1; y <= my; y++) {
    for (var x = 1; x <= mx; x++) {
      let c = document.querySelector(
        "#c[data-x='" + x + "'][data-y='" + y + "']"
      );
      if (c.dataset.z == 0) {
        c.className = "bla";
      } else if (c.dataset.z == 1) {
        c.className = "blu";
      } else if (c.dataset.z == 2) {
        c.className = "ora";
      } else if (c.dataset.z == 3 || c.dataset.z == 4 || c.dataset.z == 4) {
        c.className = "bot";
      }
    }
  }
}, 500);

document.getElementById("resetButton").onclick = function () {
  for (var y = 1; y <= my; y++) {
    for (var x = 1; x <= mx; x++) {
      let c = document.querySelector(
        "#c[data-x='" + x + "'][data-y='" + y + "']"
      );
      c.dataset.z = 0;
      c.className = "bla";
      blueturn = true;
      orangeturn = false;
    }
  }
};

bc(mx, my);
