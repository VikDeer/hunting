let fowl = document.querySelector('.inventar .points');
let fowlPoints = 0;

fowl.textContent = fowlPoints;

function randomChance (min = 1, max = 100) {
   return Math.round( min + Math.random() * (max - min));
};

function hunting() {
   for (let i = 0; i < cages.length; i++) {
      if ( catX == cages[i].dataset.x && catY == cages[i].dataset.y ) {

         if ( cages[i].classList.contains('mouse') ) {
            let chance = randomChance();

            if ( chance <= (stealthPoints / 1.25) ) {
               alert ('Поймал!');
               ++fowlPoints;
               fowl.textContent = fowlPoints;
            } else {
               alert ('Промах..');
            };
         };

      };
   };
};