var mx;
var my;

function board_reporter() {
  mx = document.getElementById("width").value;
  my = document.getElementById("height").value;
  if (mx < 5) {
    mx = 5;
  }
  if (mx > 35) {
    mx = 35;
  }
  if (my < 5) {
    my = 5;
  }
  if (my > 35) {
    my = 35;
  }
  if (mx < my) {
    mx = my;
  }
  window.open("../board.html?x=" + mx + "&y=" + my + "");
}
