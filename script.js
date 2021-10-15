/* основной объект */
const CAGES = {
   1: {
      name: "Мышь",
      points: "-5",
      class: "mouse",
   },
   2: {
      name: "Куча листьев",
      points: "-6",
      class: "leaves",
   },
   3: {
      name: "Сухой валежник",
      points: "-8",
      class: "deadwood",
   },
   4: {
      name: "Прислушаться",
      points: "+3",
      class: "ear",
   },
   5: {
      name: "Замереть",
      points: "+4",
      class: "freeze",
   },
   6: {
      name: "Красться",
      points: "+5",
      class: "sneak",
   },
   7: {
      name: "Мёртвая трава",
      points: "-7",
      class: "grass",
   },
};

let cages = document.querySelectorAll('.cage');
let cagesName = document.querySelectorAll('.cage .name');
let cagesPoints = document.querySelectorAll('.cage .points');


loadCat();
loadField();


let cat = document.querySelector('.cat');