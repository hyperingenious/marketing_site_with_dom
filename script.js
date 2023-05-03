'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');

const header = document.querySelector('header');

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '105%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const section4 = document.querySelector('#section--4');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(
    'height/width',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  //use of smooth scrolling
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  //more advanced way
  section1.scrollIntoView({ behavior: 'smooth' });
});
const h1 = document.querySelector('h1');

// rgb(255, 255, 0)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// use of event propagation
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

// use of tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;

  // Activate content area
  const btn_number = clicked.dataset.tab;

  tabsContent.forEach(ct => {
    ct.classList.remove('operations__content--active');
  });

  tabsContent[btn_number - 1].classList.add('operations__content--active');

  //Active tab
  tabs.forEach(t => {
    t.classList.remove('operations__tab--active');
    clicked.classList.add('operations__tab--active');
  });
});

//Menu Fade animation | use of event delegation | use of bind
const event_delegator = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('svg');

    siblings.forEach(e => {
      if (e !== link) e.style.opacity = this;
      logo.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', event_delegator.bind(0.5));
nav.addEventListener('mouseout', event_delegator.bind(1));

const section1_coords = section1.getBoundingClientRect();
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // only accept the arguement in pixels only
});
observer.observe(header);

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//Revealing elements on scroll
const observerFunction = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer2.unobserve(entry.target);
};

const observer2 = new IntersectionObserver(observerFunction, {
  root: null,
  threshold: 0.1,
});

document.querySelectorAll('.section').forEach(s => {
  s.classList.add('section--hidden');
  observer2.observe(s);
});
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// use of lazy loading
const images = document.querySelectorAll('img[data-src]');

const imageobserver = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
};

const observer3 = new IntersectionObserver(imageobserver, {
  root: null,
  threshold: 0,
  rootMargin: '400px',
});
images.forEach(img => {
  observer3.observe(img);
});
/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// use of slider component
// use of dots componenet
// use of arrow component
const slider = function () {
  const sliderSection = document.querySelector('#section--3');
  const slides = document.querySelectorAll('.slide');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  const dotContainer = document.querySelector('.dots');

  let maxSlide = slides.length;
  let crSlide = 0;

  // Functions
  const slideMover = function (crSlide) {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - crSlide)}%)`;
    });
  };
  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide ='${slide}']`)
      .classList.add('dots__dot--active');
  };
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class='dots__dot' data-slide='${i}'></button>`
      );
    });
  };
  const nextSlide = function () {
    if (crSlide === maxSlide - 1) crSlide = 0;
    else crSlide++;
    slideMover(crSlide);
    activateDots(crSlide);
  };
  const prevSlide = function () {
    if (crSlide == 0) crSlide = maxSlide - 1;
    else crSlide--;
    slideMover(crSlide);
    activateDots(crSlide);
  };

  const init = function () {
    slideMover(0);
    createDots();
    activateDots(0);
  };

  const slider_mover_with_arrow_click = function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  const keydownEvent = function (entries, observer) {
    const [entry] = entries;
    entry.isIntersecting
      ? document.addEventListener('keydown', slider_mover_with_arrow_click)
      : document.removeEventListener('keydown', slider_mover_with_arrow_click);
  };

  init();

  //Event Listeners
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;

      slideMover(slide);
      activateDots(slide);
    }
  });

  //on pressing the Arrow keys
  const observer4 = new IntersectionObserver(keydownEvent, {
    root: null,
    threshold: 0,
  });
  observer4.observe(sliderSection);
};
slider();
