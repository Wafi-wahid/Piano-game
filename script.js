//Detecting button press
var noWhiteKey = document.querySelectorAll(".key-white").length;

for (var i = 0; i < noWhiteKey; i++) {
  document
    .querySelectorAll(".key-white")
    [i].addEventListener("click", function () {
      var keyName = this.classList.item(0);
      makeSound(keyName);
      buttonAnimation(keyName);
    });
}

//Detecting keyboard press
document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "C":
      var key1 = new Audio("sounds/key01.mp3");
      key1.play();
      break;
    case "D":
      var key2 = new Audio("sounds/key02.mp3");
      key2.play();
      break;
    case "E":
      var key3 = new Audio("sounds/key03.mp3");
      key3.play();
      break;
    case "F":
      var key4 = new Audio("sounds/key04.mp3");
      key4.play();
      break;
    case "G":
      var key5 = new Audio("sounds/key05.mp3");
      key5.play();
      break;
    case "A":
      var key6 = new Audio("sounds/key06.mp3");
      key6.play();
      break;
    case "B":
      var key7 = new Audio("sounds/key07.mp3");
      key7.play();
      break;
    default:
      var audio = new Audio("sounds/key01.mp3");
      audio.play();
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

//Detecting black pressing
var noBlackKey = document.querySelectorAll(".key-black").length;
for (var i = 0; i < noBlackKey; i++) {
  document
    .querySelectorAll(".key-black")
    [i].addEventListener("click", function () {
      var audio = new Audio("sounds/key02.mp3");
      audio.play();
    });
}
