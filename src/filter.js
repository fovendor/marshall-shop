/* This function leaves the buttons selected in the filter pressed after the first click.
  The second click returns the button to its original state. */

// That's above my clearance, man. I tried, really.

var btnArray = document.getElementById("btnArray");
var btn = btnArray.getElementsByClassName("filter__btn");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("filter__btn--active");
      current[0].className = current[0].className.replace(" filter__btn--active", "");
      this.className += " filter__btn--active";
  });
}
