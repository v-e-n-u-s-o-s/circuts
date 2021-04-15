var maxboardsizexPROMPT = Number(prompt("Podaj szerokość planszy"));
var maxboardsizeyPROMPT = Number(prompt("Podaj wysokość planszy"));

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
      div.dataset.x = x;
      div.dataset.y = y;
      div.dataset.z = 0;
      div.style.heigth = "fit-content";

      var plus = document.createElement("img");
      plus.src = "plusBLACK.svg";
      plus.style.maxWidth = "100%";
      plus.style.position = "relative";
      plus.id = "plusBLACK";

      document.getElementById("board").appendChild(div);
      div.appendChild(plus);

      $("img").hover(
        function () {
          $(this).css("background-color", "008cff ");
        },
        function () {
          $(this).css("background-color", "white");
        }
      );
    }
  }
  var board = document.getElementById("board");
  board.style.gridTemplateRows = "repeat(" + maxboardsizey + ", 1fr)";
  board.style.gridTemplateColumns = "repeat(" + maxboardsizex + ", 1fr)";
}

boardconstructor(maxboardsizexPROMPT, maxboardsizeyPROMPT);
