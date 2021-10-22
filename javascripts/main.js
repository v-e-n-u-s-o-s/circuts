import { board_size_reciver } from "../javascripts/modules/board_assets.js";
import { board_generator } from "../javascripts/modules/board_assets.js";
import { cross_validator } from "../javascripts/modules/cross_validator.js";
import { move_info } from "./modules/move_info.js";
import { board_reset } from "../javascripts/modules/board_assets.js";
import { wall } from "../javascripts/modules/utilities/wall.js";

window.x = board_size_reciver()[0];
window.y = board_size_reciver()[1];
window.move_data = [];
window.turn = true;
window.reset = "";
window.utility = "";

document.body.onload = () => {
  board_generator(x, y);
  for (let a = 0; a < x * y; a++) {
    document.querySelectorAll("cross")[a].onclick = move_info;
  }
  for (let a = 0; a < 1; a++) {
    document.querySelectorAll(".utility")[a].onclick = wall;
  }
  document.getElementById("resetButton").onclick = board_reset;
};

setInterval(() => {
  cross_validator(x, y);
}, 200);

setInterval(() => {
  if (window.reset === "blue") {
    clearInterval;
    console.log("Blue won!");
    board_reset();
  } else if (window.reset === "orange") {
    clearInterval;
    console.log("Orange won!");
    board_reset();
  }
}, 200);

setInterval(() => {}, 200);
