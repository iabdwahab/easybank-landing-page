const headerMenuBtn = document.querySelector('#header__menu-btn');
const navbarList = document.querySelector('.navbar-list');
const headerMenuImg = document.querySelector('#header__menu-img');

headerMenuBtn.addEventListener('click', () => {
  // Toggle Show/Hide:
  navbarList.classList.toggle('navbar-list--showed');

  // Change Icon Image
  if (navbarList.classList.contains('navbar-list--showed')) {
    headerMenuImg.src = 'images/icon-close.svg';
  } else {
    headerMenuImg.src = 'images/icon-hamburger.svg';
  }
});
