function reciver() {
  let p = location.search.substring(1).split("&");
  let t = p[0].split("=");
  x = unescape(t[1]);
  t = p[1].split("=");
  y = unescape(t[1]);
  return [x, y];
}

var [x, y] = [reciver()[0], reciver()[1]];

function reset() {
  for (let a = 1; a <= y; a++) {
    for (let b = 1; b <= x; b++) {
      let selector = document.querySelector(
        "#a[data-x='" + b + "'][data-y='" + a + "']"
      );
      selector.dataset.z = 0;
      selector.className = "bla";
      t = true;
    }
  }
}

function generator(bx, by) {
  for (let a = 1; a <= by; a++) {
    for (let b = 1; b <= bx; b++) {
      let div = document.createElement("div");
      div.id = "a";
      div.className = "bla";
      div.dataset.x = b;
      div.dataset.y = a;
      div.dataset.z = 0;
      document.querySelector("#b").append(div);
    }
  }
  let b = document.getElementById("b");
  b.style.gridTemplateRows = "repeat(" + by + ", 1fr)";
  b.style.gridTemplateColumns = "repeat(" + bx + ", 1fr)";
}

setInterval(() => {
  for (let a = 1; a <= y; a++) {
    for (let b = 1; b <= x; b++) {
      let selector = document.querySelector(
        "#a[data-x='" + b + "'][data-y='" + a + "']"
      );
      if (selector.dataset.z == 0) {
        selector.className = "bla";
      } else if (selector.dataset.z == 1) {
        selector.className = "blu";
      } else if (selector.dataset.z == 2) {
        selector.className = "ora";
      } else if (
        selector.dataset.z == 3 ||
        selector.dataset.z == 4 ||
        selector.dataset.z == 4
      ) {
        selector.className = "bot";
      }
      if (
        (selector.dataset.z == 1 ||
          selector.dataset.z == 4 ||
          selector.dataset.z == 3) &&
        selector.dataset.y == 1
      ) {
        alert("Blue won!");
        reset();
      } else if (
        (selector.dataset.z == 2 ||
          selector.dataset.z == 5 ||
          selector.dataset.z == 3) &&
        selector.dataset.y == y
      ) {
        alert("Orange won!");
        reset();
      }
    }
  }
}, 500);

document.getElementById("resetButton").onclick = reset;

generator(x, y);
