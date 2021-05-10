/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function () {

   // Tabs

   const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

   function hideTabContent() {
      tabsContent.forEach(item => {
         item.style.display = 'none';
      });
      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }

   function showTabContent(i = 0) {
      tabsContent[i].style.display = 'block';
      tabs[i].classList.add('tabheader__item_active');

   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;
      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });

   //Timer

   const dedline = '2021-06-02';


   function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         hours = Math.floor((t / (1000 * 60 * 60) % 24)),
         minutes = Math.floor((t / 1000 / 60) % 60),
         seconds = Math.floor((t / 1000) % 60);


      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds

      };

   }

   function getZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;

      } else {
         return num;
      }
   }


   function setClock(selector, endTime) {
      const timer = document.querySelector(selector),
         days = document.querySelector('#days'),
         minutes = document.querySelector('#minutes'),
         hours = document.querySelector('#hours'),
         seconds = document.querySelector('#seconds'),
         timerInterval = setInterval(updateClock, 1000);


      updateClock();

      function updateClock() {
         const t = getTimeRemaining(endTime);

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

         if (t.total <= 0) {
            clearInterval(timerInterval);
         }

      }

   };



   setClock('.timer', dedline);



   // Modal window

   const openModal = document.querySelectorAll('[data-modal]'),
      closeMOdal = document.querySelector('[data-close]'),
      modalWindow = document.querySelector('.modal');

   // let timerMdal = setTimeout(openModalWidow, 10000);

   function closeModalWindow() {
      modalWindow.classList.remove('show');
      modalWindow.classList.add('hide');
      document.body.style.overflow = '';
   }

   function openModalWidow() {
      modalWindow.classList.add('show');
      modalWindow.classList.remove('hide');
      document.body.style.overflow = 'hidden';

      clearInterval(timerMdal);
   };


   openModal.forEach(btn => {
      btn.addEventListener('click', openModalWidow);

   });


   closeMOdal.addEventListener('click', closeModalWindow);

   modalWindow.addEventListener('click', (e) => {
      if (e.target === modalWindow) {
         closeModalWindow();
      }
   });

   document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modalWindow.classList.contains('show')) {
         closeModalWindow();

      }

   });

   function showModalByScoll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         openModalWidow();
         window.removeEventListener('scroll', showModalByScoll)
      }
   }

   window.addEventListener('scroll', showModalByScoll);

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


   //Slider 

   const slides = document.querySelectorAll('.offer__slide'),
      previous = document.querySelector('.offer__slider-prev'),
      slider = document.querySelector('.offer__slider'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),
      slidesField = document.querySelector('.offer__slider-inner'),
      slidesWraper = document.querySelector('.offer__slider-wrapper'),
      width = window.getComputedStyle(slidesWraper).width;



   let slideIndex = 1;
   let offset = 0;

   if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
   } else {
      total.textContent = slides.length;
      current.textContent = slideIndex;


   }

   slidesField.style.width = 100 * slides.length + '%';
   slidesField.style.display = 'flex';
   slidesField.style.transition = '0.5s all';

   slidesWraper.style.overflow = 'hidden';

   slides.forEach(slide => {
      slide.style.width = width;
   });

   slider.style.position = 'relative';

   const dots = document.createElement('ol'),
      dotsMass = [];
   dots.classList.add('carousel-indicators');
   dots.style.cssText = ` 
   position: absolute;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 15;
   display: flex;
   justify-content: center;
   margin-right: 15%;
   margin-left: 15%;
   list-style: none;
   `;

   slider.append(dots);

   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');

      dot.setAttribute('data-slide-to', i + 1);
      dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
      `;

      if (i == 0) {
         dot.style.opacity = 1;
      }

      dots.append(dot);
      dotsMass.push(dot);
   }


   next.addEventListener('click', () => {
      if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
         offset = 0;
      } else {
         offset += +width.slice(0, width.length - 2);
      }
      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length) {
         slideIndex = 1;

      } else {
         slideIndex++;
      }

      if (slides.length < 10) {
         current.textContent = `0${slideIndex}`;
      } else {
         current.textContent = slideIndex;

      }

      dotsMass.forEach(dot => {
         dot.style.opacity = '.5';
      });

      dotsMass[slideIndex - 1].style.opacity = 1;
   });

   previous.addEventListener('click', () => {
      if (offset == 0) {
         offset = +width.slice(0, width.length - 2) * (slides.length - 1);
      } else {
         offset -= +width.slice(0, width.length - 2);
      }


      slidesField.style.transform = `translateX(-${offset}px)`;


      if (slideIndex == 1) {
         slideIndex = slides.length;

      } else {
         slideIndex--;
      }

      if (slides.length < 10) {
         current.textContent = `0${slideIndex}`;
      } else {
         current.textContent = slideIndex;

      }
      dotsMass.forEach(dot =>
         dot.style.opacity = '0.5'
      );

      dotsMass[slideIndex - 1].style.opacity = 1;
   });

   dotsMass.forEach((dot) => {
      dot.addEventListener('click', (e) => {
         const slideTo = e.target.getAttribute('data-slide-to');
         slideIndex = slideTo;
         offset = +width.slice(0, width.length - 2) * (slideTo - 1);
         slidesField.style.transform = `translateX(-${offset}px)`;

         if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
         } else {
            current.textContent = slideIndex;

         }


         dotsMass.forEach(dot => {
            dot.style.opacity = '.5';



         });

         dotsMass[slideIndex - 1].style.opacity = 1;
      });
   });


   /*
   showSlider(slideIndex);
   if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
   } else {
      total.textContent = slides.length;

   }

   function showSlider(n) {
      if (n > slides.length) {
         slideIndex = 1;

      }
      if (n < 1) {
         slideIndex = slides.length;
      }

      slides.forEach((item) => {
         item.style.display = 'none';
      });


      slides[slideIndex - 1].style.display = 'block';

      if (slides.length < 10) {
         current.textContent = `0${slideIndex}`;
      } else {
         current.textContent = slideIndex;


      }
   }



   function plusSlides(n) {
      showSlider(slideIndex += n);
   }


   previous.addEventListener('click', () => {
      plusSlides(-1);

   });
   next.addEventListener('click', () => {
      plusSlides(1);

   })

   */
});