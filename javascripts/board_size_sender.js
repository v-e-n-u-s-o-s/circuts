function board_size_sender() {
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;
  if (width < 5) {
    width = 5;
  }
  if (width > 35) {
    width = 35;
  }
  if (height < 5) {
    height = 5;
  }
  if (height > 35) {
    height = 35;
  }
  if (width < height) {
    width = height;
  }
  window.open("../board.html?x=" + width + "&y=" + height + "");
}
