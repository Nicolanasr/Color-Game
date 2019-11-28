var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var rgb = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var newColors = document.querySelector("#newColors");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var end = false;

easyBtn.addEventListener("click", function(){
  end = false;
  hardBtn.classList.remove("selected");
  h1.style.backgroundColor = "rgb(38, 37, 45)";
  numSquares = 3;
  easyBtn.classList.add("selected");
  colors = generateRandomColors(numSquares);
  newColors.textContent = "New Colors";
  message.textContent = "";
  message.style.color = "black";
  pickedColor = pickColor();
  rgb.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
})

hardBtn.addEventListener("click", function(){
  end = false;
  hardBtn.classList.add("selected");
  h1.style.backgroundColor = "rgb(38, 37, 45)";
  numSquares = 6;
  message.style.color = "black";
  easyBtn.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgb.textContent = pickedColor;
  newColors.textContent = "New Colors";
  message.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
})

newColors.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  message.style.color = "black";
  h1.style.backgroundColor = "rgb(38, 37, 45)";
  rgb.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  newColors.textContent = "New Colors";
  message.textContent = "";
  end = false;
})

rgb.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
    if (!end) {
      var clickedColor = this.style.backgroundColor;

      if (clickedColor == pickedColor) {
        message.textContent = "CORRECT!";
        message.style.color = clickedColor;
        newColors.textContent = "Replay";
        end = true;
        changeColors();
        h1.style.backgroundColor = pickedColor;
      }
      else {
        this.style.backgroundColor = "rgb(38, 37, 45)";
        message.textContent = "Try Again";
      }
    }
  })
}

function changeColors() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = pickedColor;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);

  return colors[random];
}

function generateRandomColors(num) {
  arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColors());
  }
  return arr;
}

function randomColors(){
  var r = Math.floor(Math.random() * 255 + 1);
  var g = Math.floor(Math.random() * 255 + 1);
  var b = Math.floor(Math.random() * 255 + 1);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
