// import i18Obj from './translate.js';


const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-title-1': 'Standart',
    'price-title-2': 'Premium',
    'price-title-3': 'Gold',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'email': 'E-mail',
    'tel': 'Phone',
    'message': 'Message',
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-title-1': 'Стандарт',
    'price-title-2': 'Премиум',
    'price-title-3': 'Золотой',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'email': 'Электронный адрес',
    'tel': 'Телефон',
    'message': 'Текст сообщения',
  }
}





// burger start

let burger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let line = document.querySelector('.line');

function toggle() {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    line.classList.toggle('open');
};

burger.addEventListener('click', toggle);
nav.addEventListener('click', toggle);
line.addEventListener('click', toggle);

// burger end


// portfolio-imgs start

const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-photo');

function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    
    if (event.target.dataset.season === "winter"){
    portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`);
    portfolioBtn.forEach((btn) => btn.classList.remove('btn-active'));
    event.target.classList.add('btn-active');
    
    }
    else if (event.target.dataset.season === "spring"){
      portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpg`);
      portfolioBtn.forEach((btn) => btn.classList.remove('btn-active'));
      event.target.classList.add('btn-active');
    }
    else if (event.target.dataset.season === "summer"){
      portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpg`);
      portfolioBtn.forEach((btn) => btn.classList.remove('btn-active'));
      event.target.classList.add('btn-active');
    }
    else if (event.target.dataset.season === "autumn"){
      portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpg`);
      portfolioBtn.forEach((btn) => btn.classList.remove('btn-active'));
      event.target.classList.add('btn-active');
    }
    
  };
}

portfolioBtns.addEventListener('click', changeImage );

// portfolio-imgs end

// translate start

const switchLang = document.querySelector('.switch-lang');
const en = document.querySelector('.en');
const ru = document.querySelector('.ru');

function getTranslate(lang) {
  if (lang.target.classList.contains('ru') ){

      // меняется цвет кнопки при нажатии
      en.classList.remove('lang-btn-active');
      ru.classList.add('lang-btn-active');  

      // смена языка
      const dataI18 = document.querySelectorAll("[data-i18]");
      dataI18.forEach( (elem)=> {
        if (elem.placeholder) {
          elem.placeholder = i18Obj['ru'][elem.dataset.i18]
          elem.textContent = ''
        }
        else {elem.textContent = i18Obj['ru'][elem.dataset.i18]}
      });
  }
  else if (lang.target.classList.contains('en') ){

      // меняется цвет кнопки при нажатии
      ru.classList.remove('lang-btn-active');
      en.classList.add('lang-btn-active'); 

      // смена языка
      const dataI18 = document.querySelectorAll("[data-i18]");
      dataI18.forEach( (elem)=> {
        if (elem.placeholder) {
          elem.placeholder = i18Obj['en'][elem.dataset.i18]
          elem.textContent = ''
        }
        else {elem.textContent = i18Obj['en'][elem.dataset.i18]}
      });
  }
};

switchLang.addEventListener('click', getTranslate);


// translate end

// switch-theme start

const switchThemeBtn = document.querySelector('.switch-theme-btn');

let skills = document.getElementById('skills');
let portfolio = document.getElementById('portfolio');
let video = document.getElementById('video');
let price = document.getElementById('price');
let body = document.querySelector('.body');
let hero = document.getElementById('hero');
let footer = document.querySelector('.footer-col');
let navList = document.querySelector('.nav-list');

const switchThemeElems = [skills, portfolio, video, price, body, hero, footer, navList];


let navLink = document.querySelectorAll('.nav-link');
let humLine1 = document.querySelectorAll('.line1');
let humLine3 = document.querySelectorAll('.line3');
let title = document.querySelectorAll('.section-title');
let goldLine = document.querySelectorAll('.gold-line');
let btnNoColored = document.querySelectorAll('.button-no-colored');



function toggleTheme() {

  switchThemeBtn.classList.toggle('light-theme-btn');
 
  switchThemeElems.forEach( (elem) => elem.classList.toggle('light-theme') );

  btnNoColored.forEach( (btnsElem) => btnsElem.classList.toggle('light-theme') );
  title.forEach( (titleElem) => titleElem.classList.toggle('light-theme') );
  goldLine.forEach( (lineElem) => lineElem.classList.toggle('light-theme') );
  humLine1.forEach( (linkElem1) => linkElem1.classList.toggle('light-theme') );
  humLine3.forEach( (linkElem3) => linkElem3.classList.toggle('light-theme') );
  navLink.forEach( (navLinkElem) => navLinkElem.classList.toggle('light-theme') );
  


};

switchThemeBtn.addEventListener('click', toggleTheme);


// switch-theme end



// LocalStorage start



// LocalStorage end