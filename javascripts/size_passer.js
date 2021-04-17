var mx;
var my;

function board_reporter() {
  mx = document.getElementById("width").value;
  my = document.getElementById("height").value;
  if (mx < 5) {
    mx = 5;
  } else if (mx > 35) {
    mx = 35;
  } else if (my < 5) {
    my = 5;
  } else if (my > 35) {
    my = 35;
  }
  if (mx < my) {
    my = mx;
  }
  window.open("http://10.0.1.90:8000/board.html?x=" + mx + "&y=" + my + "");
}
