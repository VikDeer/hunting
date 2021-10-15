let elemSlealthPoints = document.querySelector('.count .points');
let stealthPoints = 10;

elemSlealthPoints.textContent = stealthPoints;

function countPoints() {
   for (let i = 0; i < cages.length; i++) {
      if ( catX == cages[i].dataset.x && catY == cages[i].dataset.y ) {
         stealthPoints += +cagesPoints[i].textContent;
         
         if (stealthPoints > 0 && stealthPoints < 100) {
         elemSlealthPoints.textContent = stealthPoints;
         loadCat();
         loadField();
      } else if (stealthPoints >= 100) {
         stealthPoints = 100;
         elemSlealthPoints.textContent = stealthPoints;
         loadCat();
         loadField();
      } else {
         alert('Вас заметили!');
         stealthPoints = 10;
         elemSlealthPoints.textContent = 10;
         catX = randomX();
         catY = randomY();
         loadCat();
         loadField();
      };

      };
   };
};