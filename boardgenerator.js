var maxboardsizexPROMPT = Number(prompt("Podaj szerokość planszy"));
var maxboardsizeyPROMPT = Number(prompt("Podaj wysokość planszy"));

var styles = {
  plusClass: {
    display: "inline-block",
    width: "50px",
    height: "50px",
    background:
      "linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), #000",
    backgroundPosition: "center",
    backgroundSize: "50% 2px, 2px 50%",
    backgroundRepeat: "no-repeat",
  },
  altClass: {
    background: "linear-gradient(#000, #000), linear-gradient(#000, #000)",
    backgroundPosition: "center",
    backgroundSize: "50% 2px, 2px 50%",
    backgroundRepeat: "no-repeat",
  },
};

function boardconstructor(maxboardsizex, maxboardsizey) {
  for (var x = 1; x <= maxboardsizex; x++) {
    for (var y = 1; y <= maxboardsizey; y++) {
      var div = document.createElement("div");
      div.className = "cross" + x + y;
      div.style.width = "100px";
      div.style.height = "100px";
      div.style.backgroundColor = "yellow";
      document.getElementById("board").appendChild(div);
      window["cross" + x + y] = [x, y];
    }
  }
}
boardconstructor(maxboardsizexPROMPT, maxboardsizeyPROMPT);
