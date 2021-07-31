const toggleMenu = document.querySelector('.toggle-img');
const toggleClose = document.querySelector('.menu-close');
const navbar = document.querySelector('.navigation');



toggleMenu.addEventListener('click', () => {
  navbar.classList.add('active');

  if(navbar.classList.contains('active')) {
    toggleMenu.style.display = 'none';
    toggleClose.classList.add('active');
  }
});


toggleClose.addEventListener('click', () => {
  navbar.classList.remove('active');

  if(!navbar.classList.contains('active')) {
    toggleMenu.style.display = 'block';
    toggleClose.classList.remove('active');
  }
})

