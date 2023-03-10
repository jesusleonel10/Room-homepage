const hamburgerMenu = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.header__menumobile');
const background = document.querySelector('.background')


hamburgerMenu
  .addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active')
      menuMobile.classList.toggle('open')
      background.classList.toggle('background__open')
  });

/* Slideshow functions */
const showDivs = (n) => {
  let i;
  let slides = document.getElementsByClassName("slideshow__content");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[slideIndex-1].style.display = "grid"
}
  
let slideIndex = 1;
showDivs(slideIndex);

const plusDivs = (n) => {
  showDivs(slideIndex += n);
}
