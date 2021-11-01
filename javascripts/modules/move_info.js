export function move_info() {
  function check() {
    if (window.move_data) {
      let x = window.move_data[1];
      let y = window.move_data[2];
      let z = window.move_data[3];
      let cross = document.querySelector(
        "cross[data-x='" + x + "'][data-y='" + y + "']"
      );
      cross.dataset.z = z;
    }
    if (window.move_data[0] == false) {
      turn = false;
    } else if (window.move_data[0] == true) {
      turn = true;
    }
  }

  let [this_dataset_x, this_dataset_y] = [this.dataset.x, this.dataset.y];

  let blue_selector = document.querySelector(
    "cross[data-x='" +
    this_dataset_x +
    "'][data-y='" +
    (parseInt(this_dataset_y) + 1) +
    "']"
  );

  let orange_selector = document.querySelector(
    "cross[data-x='" +
    this_dataset_x +
    "'][data-y='" +
    (parseInt(this_dataset_y) - 1) +
    "']"
  );
  if (window.utility == "") {
    if (turn) {
      if (
        (this_dataset_y == y && this.dataset.z == 0) ||
        (this.dataset.z == 0 && blue_selector.dataset.z == 1)
      ) {
        window.move_data = [false, this_dataset_x, this_dataset_y, 1];
        console.log(window.move_data);
      } else if (this.dataset.z == 2 && blue_selector.dataset.z == 1) {
        window.move_data = [false, this_dataset_x, this_dataset_y, 3];
        console.log(window.move_data);
      } else if (
        (this.dataset.z == 2 && blue_selector.dataset.z == 3) ||
        (this.dataset.z == 2 && blue_selector.dataset.z == 4)
      ) {
        window.move_data = [false, this_dataset_x, this_dataset_y, 4];
        console.log(window.move_data);
      }
    } else if (!turn) {
      if (
        (this_dataset_y == 1 && this.dataset.z == 0) ||
        (this.dataset.z == 0 && orange_selector.dataset.z == 2)
      ) {
        window.move_data = [true, this_dataset_x, this_dataset_y, 2];
        console.log(window.move_data);
      } else if (this.dataset.z == 1 && orange_selector.dataset.z == 2) {
        window.move_data = [true, this_dataset_x, this_dataset_y, 3];
        console.log(window.move_data);
      } else if (
        (this.dataset.z == 1 && orange_selector.dataset.z == 3) ||
        (this.dataset.z == 1 && orange_selector.dataset.z == 5)
      ) {
        window.move_data = [true, this_dataset_x, this_dataset_y, 5];
        console.log(window.move_data);
      }
    }

    check();
  } else if (window.utility == "wall") {
    if (turn) {
      window.move_data = [true, this_dataset_x, this_dataset_y, 6];
    } else if (!turn) {
      window.move_data = [false, this_dataset_x, this_dataset_y, 6];
    }
    check();
  }
}
