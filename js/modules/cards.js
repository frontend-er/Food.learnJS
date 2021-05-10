/*jshint esversion: 6 */

function cards() {
   // Class for cards


   class Cards {
      constructor(src, alt, title, decription, price, parentSelector, ...classes) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.decription = decription;
         this.transfer = 27;
         this.price = price;
         this.parent = document.querySelector(parentSelector);
         this.changeToUA();
         this.classes = classes;
      }

      changeToUA() {
         this.price = this.price * this.transfer;
      }

      render() {
         const element = document.createElement('div');
         if (this.classes.length === 0) {
            this.element = 'menu__item';
            element.classList.add(this.element);
         } else {
            this.classes.forEach(className => element.classList.add(className));

         }

         element.innerHTML = `  
       <img src=${this.src} alt=${this.alt}>
       <h3 class="menu__item-subtitle">${this.title}</h3>
       <div class="menu__item-descr">${this.decription}</div>
       <div class="menu__item-divider"></div>
       <div class="menu__item-price">
           <div class="menu__item-cost">Цена:</div>
           <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
       </div>
      `;
         this.parent.append(element);
      }
   }

   new Cards(
      "img/tabs/vegy.jpg",
      "vegy",
      "Меню 'Фитнес'",
      "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
      9,
      '.menu .container',
      "menu__item",
      "big"

   ).render();


   new Cards(
      "img/tabs/elite.jpg",
      "elite",

      "Меню 'Фитнес'",
      "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
      3,
      '.menu .container',
      "menu__item",
      "big"

   ).render();

   new Cards(
      "img/tabs/post.jpg",
      "post",

      "Меню 'Фитнес'",
      "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
      12,
      '.menu .container',
      "menu__item",
      "big"

   ).render();

}

export default cards;