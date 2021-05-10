/*jshint esversion: 6 */

function calculator() {
   //Calc


   const result = document.querySelector('.calculating__result span');
   let sex, height, weight, age, ratio;




   if (localStorage.getItem('sex')) {
      sex = localStorage.getItem('sex');
   } else {
      sex = 'female';
      localStorage.setItem('sex', 'female');
   }

   if (localStorage.getItem('ratio')) {
      ratio = localStorage.getItem('ratio');
   } else {
      ratio = 1.375;
      localStorage.setItem('ratio', 1.375);
   }

   function innitLocalSettings(seletor, activeClass) {
      const elements = document.querySelectorAll(seletor);

      elements.forEach((elem) => {
         elem.classList.remove(activeClass);
         if (elem.getAttribute('id') === localStorage.getItem('sex')) {
            elem.classList.add(activeClass);
         }
         if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            elem.classList.add(activeClass);
         }
      });
   }


   innitLocalSettings('#gender div', 'calculating__choose-item_active');
   innitLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


   function calcTota() {
      if (!sex || !height || !weight || !age || !ratio) {
         result.textContent = '____';
         return;
      }

      if (sex === 'female') {
         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
      } else {
         result.textContent = Math.round((88.6 + (13.2 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
      }

   }



   function getStaticInformation(parentSelector, activeClass) {
      const elements = document.querySelectorAll(`${parentSelector} div`);

      elements.forEach((e) => {
         e.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {

               ratio = +e.target.getAttribute('data-ratio');
               localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
               sex = e.target.getAttribute('id');
               localStorage.setItem('sex', e.target.getAttribute('id'));
            }


            elements.forEach((elem) => {
               elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);
            calcTota();
         });
      });



   }

   getStaticInformation('#gender', 'calculating__choose-item_active');
   getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');


   function getDinamicInformation(selector) {
      const input = document.querySelector(selector);

      input.addEventListener('input', () => {


         if (input.value.match(/\D/g)) {
            input.style.background = 'red';
         } else {
            input.style.background = 'white';

         }
         switch (input.getAttribute('id')) {
            case 'height':
               height = +input.value;
               break;
            case 'weight':
               weight = +input.value;
               break;
            case 'age':
               age = +input.value;
               break;
         }
         calcTota();

      });
   }

   getDinamicInformation('#height');
   getDinamicInformation('#weight');
   getDinamicInformation('#age');
}


export default calculator;