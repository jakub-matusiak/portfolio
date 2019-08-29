const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const about = document.querySelector('.section--about');
const top = document.querySelector('.top');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('navigation--active');
  hamburger.classList.toggle('hamburger--active');
});

navigation.addEventListener('click', (e) => {
  if (e.target.classList.contains('navigation__link')) {
    navigation.classList.toggle('navigation--active');
    hamburger.classList.toggle('hamburger--active');
    top.classList.add('top--active');
  }
});

window.addEventListener('scroll', () => {
  if (about.getBoundingClientRect().top < 50) {
    top.classList.add('top--active');
  } else {
    top.classList.remove('top--active');
  }
});