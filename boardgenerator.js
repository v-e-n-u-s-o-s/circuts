var maxboardsizexPROMPT = Number(prompt("Podaj szerokość planszy"));
var maxboardsizeyPROMPT = Number(prompt("Podaj wysokość planszy"));

function boardconstructor(maxboardsizex, maxboardsizey) {
  for (var x = 1; x <= maxboardsizex; x++) {
    for (var y = 1; y <= maxboardsizey; y++) {
      var div = document.createElement("div");
      var plus = document.createElement("img");

      plus.src = "plusBLACK.svg";
      plus.style.maxWidth = "100%";
      plus.style.position = "relative";
      plus.id = "plusBLACK" + x + y;

      div.className = "cross" + x + y;
      div.id = "cross" + x + y;
      div.style.width = "fit-content";
      div.appendChild(plus);

      document.getElementById("board").appendChild(div);
      window["cross" + x + y] = [x, y];

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

var blueturn = true;
var orangeturn = false;
$("img").click(function () {
  if (blueturn == true) {
    $(this).attr("src", "plusBLUE.svg");
    orangeturn = true;
    blueturn = false;
    console.log(orangeturn, blueturn);
  } else if (orangeturn == true) {
    $(this).attr("src", "plusORANGE.svg");
    blueturn = true;
    orangeturn = false;
    console.log(orangeturn, blueturn);
  }
});
