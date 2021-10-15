let buttonTop = document.querySelector('.top');
let buttonBottom = document.querySelector('.bottom');
let buttonLeft = document.querySelector('.left');
let buttonRight = document.querySelector('.right');


buttonTop.onclick = moveTop;
buttonBottom.onclick = moveBottom;
buttonLeft.onclick = moveLeft;
buttonRight.onclick = moveRight;

document.addEventListener('keydown', logKey);
function logKey(e) {
   if (e.code == "ArrowUp") {
      moveTop();
   } else if (e.code == "ArrowDown") {
      moveBottom();
   } else if (e.code == "ArrowLeft") {
      moveLeft();
   } else if (e.code == "ArrowRight") {
      moveRight();
   };
};

function moveTop() {
   if (catY == 1) {
      alert ('Дальше некуда!');
   } else {
      deleteCat();
      --catY;
      countPoints();
   };
};

function moveBottom() {
   if (catY == 3) {
      alert ('Дальше некуда!');
   } else {
      deleteCat();
      ++catY;
      countPoints();
   };
};

function moveLeft() {
   if (catX == 1) {
      alert ('Дальше некуда!');
   } else {
      deleteCat();
      --catX;
      countPoints();
   };
};

function moveRight() {
   if (catX == 3) {
      alert ('Дальше некуда!');
   } else {
      deleteCat();
      ++catX;
      countPoints();
   };
};
