var e = x * y;

let t = true;

for (let a = 0; a <= e; a++) {
  document.querySelectorAll("#a")[a].onclick = function () {
    let [this_dataset_x, this_dataset_y] = [this.dataset.x, this.dataset.y];

    let a = document.querySelector(
      "#a[data-x='" +
        this_dataset_x +
        "'][data-y='" +
        (parseInt(this_dataset_y) + 1) +
        "']"
    );

    let b = document.querySelector(
      "#a[data-x='" +
        this_dataset_x +
        "'][data-y='" +
        (parseInt(this_dataset_y) - 1) +
        "']"
    );

    if (t) {
      if (
        (this_dataset_y == y && this.dataset.z == 0) ||
        (this.dataset.z == 0 && a.dataset.z == 1)
      ) {
        this.className = "blu";
        this.dataset.z = 1;
        t = false;
      } else if (this.dataset.z == 2 && a.dataset.z == 1) {
        this.dataset.z = 3;
        this.className = "bot";
        t = false;
      } else if (
        (this.dataset.z == 2 && a.dataset.z == 3) ||
        (this.dataset.z == 2 && a.dataset.z == 4)
      ) {
        a.dataset.z = 3;
        this.dataset.z = 4;
        this.className = "bot";
        t = false;
      }
    } else if (!t) {
      if (
        (this_dataset_y == 1 && this.dataset.z == 0) ||
        (this.dataset.z == 0 && b.dataset.z == 2)
      ) {
        this.dataset.z = 2;
        this.className = "ora";
        t = true;
      } else if (this.dataset.z == 1 && b.dataset.z == 2) {
        this.dataset.z = 3;
        this.className = "bot";
        t = true;
      } else if (
        (this.dataset.z == 1 && b.dataset.z == 3) ||
        (this.dataset.z == 1 && b.dataset.z == 5)
      ) {
        b.dataset.z = 3;
        this.dataset.z = 5;
        this.className = "bot";
        t = true;
      }
    }
    if (t) {
      document.querySelector("p").innerHTML = "Blue";
    } else if (!t) {
      document.querySelector("p").innerHTML = "Orange";
    }
  };
}
