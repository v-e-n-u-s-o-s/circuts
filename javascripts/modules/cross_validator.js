export function cross_validator(x, y) {
  for (let a = 1; a <= y; a++) {
    for (let b = 1; b <= x; b++) {
      let selector = document.querySelector(
        "cross[data-x='" + b + "'][data-y='" + a + "']"
      );
      if (selector.dataset.z == 0) {
        selector.className = "black";
      } else if (selector.dataset.z == 1) {
        selector.className = "blue";
      } else if (selector.dataset.z == 2) {
        selector.className = "orange";
      } else if (
        selector.dataset.z == 3 ||
        selector.dataset.z == 4 ||
        selector.dataset.z == 5
      ) {
        selector.className = "both";
      }
      if (
        (selector.dataset.z == 1 ||
          selector.dataset.z == 4 ||
          selector.dataset.z == 3) &&
        selector.dataset.y == 1
      ) {
        window.reset = "blue";
      } else if (
        (selector.dataset.z == 2 ||
          selector.dataset.z == 5 ||
          selector.dataset.z == 3) &&
        selector.dataset.y == y
      ) {
        window.reset = "orange";
      }
    }
  }
}
