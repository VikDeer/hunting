function randomKey(min = 1, max = Object.keys(CAGES).length) {
   return Math.round( min + Math.random() * (max - min));
};


function loadField() {
   for (i = 0; i < cages.length; i++) {
      if ( cages[i].classList.contains('cat') == false ) {
         cages[i].className = "cage";
         let key = randomKey();
         cagesName[i].textContent = CAGES[key].name;
         cages[i].classList.add(CAGES[key].class);
         cagesPoints[i].textContent = CAGES[key].points;
      };
   };
};

// function removeField() {
//    for (i = 0; i < cages.length; i++) {
//          cages[i].className = "cage";
//    };
// };