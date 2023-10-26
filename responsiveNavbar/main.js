let hamburgerMenu = document.querySelector('.hamburger-menu');
let ul = document.querySelector('.list');

// icon hamburger
let spanSatu = document.querySelector('.hamburger-menu span:first-child');
let spanDua = document.querySelector('.hamburger-menu span:nth-child(2)');
let spanTiga = document.querySelector('.hamburger-menu span:last-child');

hamburgerMenu.addEventListener('click', () => {
  spanSatu.classList.toggle('transformSatu');
  spanDua.classList.toggle('transformDua');
  spanTiga.classList.toggle('transformTiga');
  ul.classList.toggle('slide');
});
