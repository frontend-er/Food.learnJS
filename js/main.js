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
       constructor(src, alt, title, decription, price, parentSelector) {
          this.src = src;
          this.alt = alt;
          this.title = title;
          this.decription = decription;
          this.transfer = 27;
          this.price = price;
          this.parent = document.querySelector(parentSelector);
          this.changeToUA();
       }

       changeToUA() {
          this.price = this.price * this.transfer;
       }

       render() {
          const element = document.createElement('div');
          element.innerHTML = `  
           <div class="menu__item">
          <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.decription}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
         </div>`;
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

    ).render();


    new Cards(
       "img/tabs/elite.jpg",
       "elite",

       "Меню 'Фитнес'",
       "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
       3,
       '.menu .container',

    ).render();

    new Cards(
       "img/tabs/post.jpg",
       "post",

       "Меню 'Фитнес'",
       "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
       12,
       '.menu .container',

    ).render();
 });