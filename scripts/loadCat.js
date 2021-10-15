function randomX(min = 1, max = 3) {
   return Math.round( min + Math.random() * (max - min));
};
function randomY(min = 1, max = 3) {
   return Math.round( min + Math.random() * (max - min));
};

let catX = randomX();
let catY = randomY();


function loadCat() {

   for (let i = 0; i < cages.length; i++) {
      if ( catX == cages[i].dataset.x && catY == cages[i].dataset.y ) {
         cages[i].classList = "cage cat";
         cagesName[i].textContent = "Притаившийся охотник";
         cagesPoints[i].textContent = "";
         cages[i].dataset.x = catX;
         cages[i].dataset.y = catY;
      };
   };
};

function deleteCat() {

   for (let i = 0; i < cages.length; i++) {
      if ( catX == cages[i].dataset.x && catY == cages[i].dataset.y ) {
         cages[i].classList.remove('cat');
         cagesName[i].textContent = "";
      };
   };

};