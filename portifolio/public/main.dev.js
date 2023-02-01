"use strict";

/*===== MENU SHOW =====*/
var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');
/*==================== REMOVE MENU MOBILE ====================*/

var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu'); // When we click on each nav__link, we remove the show-menu class

  navMenu.classList.remove('show');
}

navLink.forEach(function (n) {
  return n.addEventListener('click', linkAction);
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

var sections = document.querySelectorAll('section[id]');

function scrollActive() {
  var scrollY = window.pageYOffset;
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop - 50;
    // eslint-disable-next-line no-undef
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // eslint-disable-next-line no-undef
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      // eslint-disable-next-line no-undef
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}

window.addEventListener('scroll', scrollActive);
/*===== SCROLL REVEAL ANIMATION =====*/

// eslint-disable-next-line no-undef
var sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200 //     reset: true

});
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
  delay: 400
});
sr.reveal('.home__social-icon', {
  interval: 200
});
sr.reveal('.skills__data, .work__img, .contact__input', {
  interval: 200
});