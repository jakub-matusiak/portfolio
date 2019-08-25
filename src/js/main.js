const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('navigation--active');
  hamburger.classList.toggle('hamburger--active');
});

navigation.addEventListener('click', (e) => {
  if (e.target.classList.contains('navigation__link')) {
    navigation.classList.toggle('navigation--active');
    hamburger.classList.toggle('hamburger--active');
  }
});