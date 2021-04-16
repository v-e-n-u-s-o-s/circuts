var maxboardsizexPROMPT;
var maxboardsizeyPROMPT;

function board_reporter() {
  maxboardsizexPROMPT = document.getElementById("width").value;
  maxboardsizeyPROMPT = document.getElementById("height").value;
  console.log(maxboardsizexPROMPT, maxboardsizeyPROMPT);
  let container = document.getElementsByClassName("container")[0];
  container.style.display = "none";
  setTimeout(boardconstructor(maxboardsizexPROMPT, maxboardsizeyPROMPT), 500);
}

if (
  maxboardsizexPROMPT < 5 ||
  maxboardsizeyPROMPT < 5 ||
  maxboardsizexPROMPT > 25 ||
  maxboardsizeyPROMPT > 25
) {
  alert("Za duża lub za mała plansza!");
  var maxboardsizexPROMPT = Number(prompt("Podaj szerokość planszy"));
  var maxboardsizeyPROMPT = Number(prompt("Podaj wysokość planszy"));
}

function boardconstructor(maxboardsizex, maxboardsizey) {
  for (var y = 1; y <= maxboardsizey; y++) {
    for (var x = 1; x <= maxboardsizex; x++) {
      var div = document.createElement("div");
      div.id = "cross";
      div.className = "crossBLACK";
      div.dataset.x = x;
      div.dataset.y = y;
      div.dataset.z = 0;

      document.querySelector("#board").append(div);
    }
  }
  var board = document.getElementById("board");
  board.style.gridTemplateRows = "repeat(" + maxboardsizey + ", 1fr)";
  board.style.gridTemplateColumns = "repeat(" + maxboardsizex + ", 1fr)";
}

boardconstructor(maxboardsizexPROMPT, maxboardsizeyPROMPT);

setInterval(() => {
  for (var y = 1; y <= maxboardsizeyPROMPT; y++) {
    for (var x = 1; x <= maxboardsizexPROMPT; x++) {
      let cross = document.querySelector(
        "#cross[data-x='" + x + "'][data-y='" + y + "']"
      );
      if (cross.dataset.z == 0) {
        cross.className = "plusBLACK";
      } else if (cross.dataset.z == 1) {
        cross.className = "plusBLUE";
      } else if (cross.dataset.z == 2) {
        cross.className = "plusORANGE";
      } else if (
        cross.dataset.z == 3 ||
        cross.dataset.z == 4 ||
        cross.dataset.z == 4
      ) {
        cross.className = "plusBOTH";
      }
    }
  }
}, 500);

$("[id='resetButton']").click(function () {
  for (var y = 1; y <= maxboardsizeyPROMPT; y++) {
    for (var x = 1; x <= maxboardsizexPROMPT; x++) {
      let cross = document.querySelector(
        "#cross[data-x='" + x + "'][data-y='" + y + "']"
      );
      cross.dataset.z = 0;
      cross.className = "plusBLACK";
      blueturn = true;
      orangeturn = false;
    }
  }
});
