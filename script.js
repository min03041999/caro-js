var win = document.getElementById("win");

var boxes = document.querySelectorAll("#main div"),
  X_or_O = 0,
  turn = document.getElementById("turn");

const replay = () => {
  for (var i = 0; i < box.length; i++) {
    boxes[i].innerHTML = "";
  }
};

const selectWinnerBoxes = (b1, b2, b3) => {
  b1.style.background = "red";
  b2.style.background = "red";
  b3.style.background = "red";
  win.innerHTML = "Win";
};

const getWinner = () => {
  var box1 = document.getElementById("box1"),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),
    box4 = document.getElementById("box4"),
    box5 = document.getElementById("box5"),
    box6 = document.getElementById("box6"),
    box7 = document.getElementById("box7"),
    box8 = document.getElementById("box8"),
    box9 = document.getElementById("box9");

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  )
    selectWinnerBoxes(box1, box2, box3);
  else if (
    box4.innerHTML !== "" &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  )
    selectWinnerBoxes(box4, box5, box6);
  else if (
    box7.innerHTML !== "" &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  )
    selectWinnerBoxes(box7, box8, box9);
  else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  )
    selectWinnerBoxes(box1, box5, box9);
  else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  )
    selectWinnerBoxes(box3, box5, box7);
  else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  )
    selectWinnerBoxes(box1, box4, box7);
  else if (
    box2.innerHTML !== "" &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  )
    selectWinnerBoxes(box2, box5, box8);
  else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  )
    selectWinnerBoxes(box3, box6, box9);
};

for (var i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    if (this.innerHTML !== "X" && this.innerHTML !== "O") {
      if (X_or_O % 2 === 0) {
        this.innerHTML = "X";
        console.log(this);
        getWinner();
        turn.innerHTML = "O";
        X_or_O += 1;
      } else {
        this.innerHTML = "O";
        console.log(this);
        getWinner();
        turn.innerHTML = "X";
        X_or_O += 1;
      }
    }
  };
}
