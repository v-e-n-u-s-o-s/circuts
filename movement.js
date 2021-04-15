var allBoxes = maxboardsizexPROMPT * maxboardsizeyPROMPT;

var upperspawn = 1;
var bottomspawn = maxboardsizeyPROMPT;

var blueturn = true;
var orangeturn = false;

$("img")
  .parent()
  .click(function () {
    var x = this.dataset.x;
    var y = this.dataset.y;
    var z = this.dataset.z;

    var yplus = parseInt(y) + 1;
    var yminus = parseInt(y) - 1;

    var checkBlue = document.querySelector(
      "#cross[data-x='" + x + "'][data-y='" + yplus + "']"
    );

    var checkOrange = document.querySelector(
      "#cross[data-x='" + x + "'][data-y='" + yminus + "']"
    );

    if (blueturn == true && y == bottomspawn && z == 0) {
      $(this).children().attr("src", "plusBLUE.svg");
      orangeturn = true;
      blueturn = false;
      this.dataset.z = 1;
    } else if (orangeturn == true && y == upperspawn && z == 0) {
      $(this).children().attr("src", "plusORANGE.svg");
      blueturn = true;
      orangeturn = false;
      this.dataset.z = 2;
    } else if (blueturn == true && z == 0 && checkBlue.dataset.z == 1) {
      $(this).children().attr("src", "plusBLUE.svg");
      orangeturn = true;
      blueturn = false;
      this.dataset.z = 1;
    } else if (orangeturn == true && z == 0 && checkOrange.dataset.z == 2) {
      $(this).children().attr("src", "plusORANGE.svg");
      blueturn = true;
      orangeturn = false;
      this.dataset.z = 2;
    } else if (blueturn == true && z == 2 && checkBlue.dataset.z == 1) {
      $(this).children().attr("src", "plusBOTH.svg");
      orangeturn = true;
      blueturn = false;
      this.dataset.z = 3;
    } else if (orangeturn == true && z == 1 && checkOrange.dataset.z == 2) {
      $(this).children().attr("src", "plusBOTH.svg");
      blueturn = true;
      orangeturn = false;
      this.dataset.z = 3;
    } else if (blueturn == true && z == 2 && checkBlue.dataset.z == 3) {
      $(this).children().attr("src", "plusBOTH.svg");
      orangeturn = true;
      blueturn = false;
      checkBlue.dataset.z = 3;
      this.dataset.z = 4;
    } else if (orangeturn == true && z == 1 && checkOrange.dataset.z == 3) {
      $(this).children().attr("src", "plusBOTH.svg");
      blueturn = true;
      orangeturn = false;
      checkOrange.dataset.z = 3;
      this.dataset.z = 5;
    } else if (blueturn == true && z == 2 && checkBlue.dataset.z == 4) {
      $(this).children().attr("src", "plusBOTH.svg");
      orangeturn = true;
      blueturn = false;
      checkBlue.dataset.z = 3;
      this.dataset.z = 4;
    } else if (orangeturn == true && z == 1 && checkOrange.dataset.z == 5) {
      $(this).children().attr("src", "plusBOTH.svg");
      blueturn = true;
      orangeturn = false;
      checkOrange.dataset.z = 3;
      this.dataset.z = 5;
    }
  });

//zrobić wyświetlacz czyja tura jest
if (blueturn == true && orangeturn == false) {
} else if (blueturn == false && orangeturn == true) {
}
//zrobic winy
