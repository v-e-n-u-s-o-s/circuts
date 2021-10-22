export function wall() {
  if (window.utility == "wall") {
    window.utility = "";
  } else {
    window.utility = "wall";
  }
  let button = document.querySelector("#wall");
  if (button.style.backgroundColor == "") {
    button.style.backgroundColor = "yellow";
  } else {
    button.style.backgroundColor = "";
  }
}
