export function board_size_reciver() {
  let p = location.search.substring(1).split("&");
  let t = p[0].split("=");
  let x = unescape(t[1]);
  t = p[1].split("=");
  let y = unescape(t[1]);
  return [x, y];
}

export function board_generator(width, height) {
  for (let a = 1; a <= height; a++) {
    for (let b = 1; b <= width; b++) {
      let cross = document.createElement("cross");
      cross.className = "black";
      cross.dataset.x = b;
      cross.dataset.y = a;
      cross.dataset.z = 0;
      document.querySelector("board").append(cross);
    }
  }
  let board = document.querySelector("board");
  board.style.gridTemplateRows = "repeat(" + height + ", 1fr)";
  board.style.gridTemplateColumns = "repeat(" + width + ", 1fr)";
}

export function board_reset() {
  console.log("Board has been cleared!")
  for (let a = 1; a <= y; a++) {
    for (let b = 1; b <= x; b++) {
      let selector = document.querySelector(
        "cross[data-x='" + b + "'][data-y='" + a + "']"
      );
      selector.dataset.z = 0;
      selector.className = "black";
      window.turn = true;
      window.reset = "";
    }
  }
}